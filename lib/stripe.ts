import Stripe from "stripe";

// Lazy initialization to avoid build crash when STRIPE_SECRET_KEY is not set
let _stripe: Stripe | null = null;

function getStripeClient(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not defined");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-02-25.clover",
      typescript: true,
    });
  }
  return _stripe;
}

export const stripe = new Proxy({} as Stripe, {
  get(_, prop) {
    const client = getStripeClient();
    const value = (client as any)[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

export async function createCheckoutSession(userId: string, userEmail: string) {
  const stripe = getStripeClient();
  
  const session = await stripe.checkout.sessions.create({
    customer_email: userEmail,
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID_PRO,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/billing?canceled=true`,
    metadata: {
      userId,
    },
  });

  return session;
}

export async function createCustomerPortalSession(stripeCustomerId: string) {
  const stripe = getStripeClient();
  
  const session = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/billing`,
  });

  return session;
}

export async function handleWebhook(body: string, signature: string) {
  const stripe = getStripeClient();
  
  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  return event;
}