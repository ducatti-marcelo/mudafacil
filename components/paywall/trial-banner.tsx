"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { AlertCircle, X } from "lucide-react";
import { daysLeftInTrial, isTrialActive } from "@/lib/subscription";
import { useState } from "react";
import Link from "next/link";

export function TrialBanner() {
  const { data: session } = useSession();
  const [isVisible, setIsVisible] = useState(true);

  if (!session?.user) return null;

  const user = session.user as any;
  
  if (!isTrialActive(user)) return null;

  const daysLeft = daysLeftInTrial(user);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <div>
              <span className="font-medium text-yellow-800">
                Seu trial expira em {daysLeft} dias
              </span>
              <span className="text-yellow-700 ml-2">
                Faça upgrade para continuar usando todas as funcionalidades.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link href="/settings/billing">
                Fazer Upgrade
              </Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-yellow-600 hover:text-yellow-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}