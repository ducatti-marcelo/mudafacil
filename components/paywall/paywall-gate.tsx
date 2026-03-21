"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Zap } from "lucide-react";
import { hasAccess } from "@/lib/subscription";
import Link from "next/link";

interface PaywallGateProps {
  children: React.ReactNode;
  feature: string;
  description?: string;
}

export function PaywallGate({ children, feature, description }: PaywallGateProps) {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <Card className="border-2 border-dashed">
        <CardHeader className="text-center">
          <Lock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
          <CardTitle>Acesso Restrito</CardTitle>
          <CardDescription>
            Faça login para acessar {feature}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild>
            <Link href="/login">Fazer Login</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const user = session.user as any;
  const hasFullAccess = hasAccess(user);

  if (!hasFullAccess) {
    return (
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader className="text-center">
          <Zap className="h-8 w-8 mx-auto text-primary mb-2" />
          <CardTitle>Recurso Premium</CardTitle>
          <CardDescription>
            {description || `Acesse ${feature} com um plano pago ou durante o trial.`}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild>
              <Link href="/settings/billing">Fazer Upgrade</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/register">Começar Trial Grátis</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return <>{children}</>;
}