"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Calendar, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  ExternalLink
} from "lucide-react";
import { daysLeftInTrial, isTrialActive, isSubscribed } from "@/lib/subscription";
import { toast } from "sonner";

export default function BillingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const user = session.user as any;
  const trialDaysLeft = user.trialEndsAt ? daysLeftInTrial(user) : 0;
  const isInTrial = isTrialActive(user);
  const isPro = isSubscribed(user);

  const handleUpgrade = async () => {
    try {
      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Erro ao criar sessão de checkout");
      }
    } catch (error) {
      toast.error("Erro ao processar upgrade");
    }
  };

  const handleManageBilling = async () => {
    try {
      const res = await fetch("/api/stripe/create-portal", {
        method: "POST",
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Erro ao abrir portal de billing");
      }
    } catch (error) {
      toast.error("Erro ao processar solicitação");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Billing e Assinatura</h1>
          <p className="text-muted-foreground">
            Gerencie seu plano e informações de pagamento
          </p>
        </div>

        {/* Current Plan */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Plano Atual
            </CardTitle>
            <CardDescription>
              Informações sobre sua assinatura
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold">
                    {isPro ? "PRO" : isInTrial ? "TRIAL" : "FREE"}
                  </span>
                  {isPro && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Ativo
                    </span>
                  )}
                  {isInTrial && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      {trialDaysLeft} dias restantes
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {isPro 
                    ? "Acesso ilimitado a todas as funcionalidades"
                    : isInTrial
                    ? "Acesso ilimitado durante o trial"
                    : "Acesso limitado - 1 mudança ativa"}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {isPro ? "R$ 29,90/mês" : "Grátis"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isPro ? "Cobrado mensalmente" : isInTrial ? "Trial gratuito" : "Plano gratuito"}
                </p>
              </div>
            </div>

            {/* Trial Banner */}
            {isInTrial && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">
                      Seu trial expira em {trialDaysLeft} dias
                    </h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Faça upgrade para o plano PRO e continue usando todas as funcionalidades sem interrupção.
                    </p>
                    <Button 
                      size="sm" 
                      className="mt-3"
                      onClick={handleUpgrade}
                    >
                      Fazer Upgrade Agora
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              {!isPro && (
                <Button onClick={handleUpgrade}>
                  {isInTrial ? "Assinar Agora" : "Começar Trial"}
                </Button>
              )}
              {isPro && (
                <Button variant="outline" onClick={handleManageBilling}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Gerenciar Assinatura
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Plan Features */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos do Plano</CardTitle>
            <CardDescription>
              Compare os recursos disponíveis em cada plano
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">FREE</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    1 mudança ativa
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Até 15 itens no canvas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    3 cotações por mudança
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <AlertCircle className="h-4 w-4" />
                    Sem filtros avançados
                  </li>
                </ul>
              </div>

              <div className="p-4 border-2 border-primary rounded-lg relative">
                <div className="absolute -top-3 left-4 bg-primary text-primary-foreground px-2 py-1 text-xs rounded">
                  Mais Popular
                </div>
                <h3 className="font-bold mb-2">PRO</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Mudanças ilimitadas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Itens ilimitados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cotações ilimitadas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Filtros avançados
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-bold mb-2">TRIAL</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  14 dias grátis com todos os recursos do PRO
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tudo do PRO
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sem cartão de crédito
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cancele quando quiser
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}