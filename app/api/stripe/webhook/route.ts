import { NextResponse } from "next/server";
import { handleWebhook } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  try {
    const event = await handleWebhook(body, signature);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata?.userId;

        if (userId) {
          await prisma.user.update({
            where: { id: userId },
            data: {
              plan: "PRO",
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string,
            },
          });
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const stripeCustomerId = subscription.customer;

        const user = await prisma.user.findFirst({
          where: { stripeCustomerId: stripeCustomerId as string },
        });

        if (user) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCurrentPeriodEnd: new Date(
                (subscription as any).current_period_end * 1000
              ),
            },
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const stripeCustomerId = subscription.customer;

        const user = await prisma.user.findFirst({
          where: { stripeCustomerId: stripeCustomerId as string },
        });

        if (user) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              plan: "FREE",
              stripeSubscriptionId: null,
              stripeCurrentPeriodEnd: null,
            },
          });
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object;
        const stripeCustomerId = invoice.customer;

        const user = await prisma.user.findFirst({
          where: { stripeCustomerId: stripeCustomerId as string },
        });

        if (user && invoice.subscription) {
          const subscription = await prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCurrentPeriodEnd: new Date(
                (invoice as any).period_end * 1000
              ),
            },
          });
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 400 }
    );
  }
}