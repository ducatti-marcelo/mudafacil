"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Mail, Chrome } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/app";
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl });
    } catch (error) {
      toast.error("Erro ao fazer login com Google");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn("email", { email, callbackUrl });
      toast.success("Link enviado! Verifique seu email.");
    } catch (error) {
      toast.error("Erro ao enviar link de acesso");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Truck className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Entrar no MudaFácil</CardTitle>
          <CardDescription>
            Faça login para planejar sua mudança
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <Chrome className="mr-2 h-4 w-4" />
            Continuar com Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                ou continue com email
              </span>
            </div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              <Mail className="mr-2 h-4 w-4" />
              Enviar link de acesso
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Ao continuar, você concorda com nossos{" "}
            <a href="/terms" className="underline hover:text-primary">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="/privacy" className="underline hover:text-primary">
              Política de Privacidade
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}