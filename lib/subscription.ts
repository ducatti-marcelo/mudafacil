import { prisma } from "./db";

export type User = {
  id: string;
  plan: "FREE" | "TRIAL" | "PRO";
  trialEndsAt: Date | null;
  stripeCurrentPeriodEnd: Date | null;
};

export function isTrialActive(user: User): boolean {
  if (!user.trialEndsAt) return false;
  return user.trialEndsAt > new Date() && user.plan === "TRIAL";
}

export function isSubscribed(user: User): boolean {
  if (!user.stripeCurrentPeriodEnd) return false;
  return user.plan === "PRO" && user.stripeCurrentPeriodEnd > new Date();
}

export function hasAccess(user: User): boolean {
  return isTrialActive(user) || isSubscribed(user);
}

export function daysLeftInTrial(user: User): number {
  if (!user.trialEndsAt) return 0;
  const now = new Date();
  const diffTime = user.trialEndsAt.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

export const PLAN_LIMITS = {
  FREE: {
    maxMudancasAtivas: 1,
    maxItensCanvas: 15,
    maxCotacoesPorMudanca: 3,
    filtrosAvancados: false,
  },
  TRIAL: {
    maxMudancasAtivas: Infinity,
    maxItensCanvas: Infinity,
    maxCotacoesPorMudanca: Infinity,
    filtrosAvancados: true,
  },
  PRO: {
    maxMudancasAtivas: Infinity,
    maxItensCanvas: Infinity,
    maxCotacoesPorMudanca: Infinity,
    filtrosAvancados: true,
  },
} as const;

export async function checkUsageLimit(
  userId: string,
  resource: keyof (typeof PLAN_LIMITS)["FREE"]
) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { plan: true, trialEndsAt: true, stripeCurrentPeriodEnd: true },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const planLimits = PLAN_LIMITS[user.plan];
  const limit = planLimits[resource];

  if (typeof limit === "boolean") {
    return limit;
  }

  if (limit === Infinity) {
    return true;
  }

  if (resource === "maxMudancasAtivas") {
    const count = await prisma.mudanca.count({
      where: {
        userId,
        status: { notIn: ["CONCLUIDA", "CANCELADA"] },
      },
    });
    return count < limit;
  }

  return true;
}