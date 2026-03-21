"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, 
  Plus, 
  ArrowRight,
  Package,
  BarChart3,
  Clock,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: mudancas, isLoading } = useQuery({
    queryKey: ["mudancas"],
    queryFn: async () => {
      const res = await fetch("/api/mudancas");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    enabled: !!session,
  });

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">MudaFácil</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {session.user?.email}
            </span>
            <Button variant="outline" size="sm">
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Minhas Mudanças</h1>
            <p className="text-muted-foreground">
              Planeje e gerencie suas mudanças
            </p>
          </div>
          <Button asChild>
            <Link href="/app/nova-mudanca">
              <Plus className="mr-2 h-4 w-4" />
              Nova Mudança
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Mudanças Ativas
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mudancas?.filter((m: any) => m.status !== "CONCLUIDA" && m.status !== "CANCELADA").length || 0}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cotações Recebidas
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mudancas?.reduce((acc: number, m: any) => acc + (m.cotacoes?.length || 0), 0) || 0}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Próximas Mudanças
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mudancas?.filter((m: any) => m.dataDesejada && new Date(m.dataDesejada) > new Date()).length || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mudanças List */}
        <Card>
          <CardHeader>
            <CardTitle>Suas Mudanças</CardTitle>
            <CardDescription>
              Clique em uma mudança para ver os detalhes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : mudancas?.length === 0 ? (
              <div className="text-center py-8">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Nenhuma mudança ainda</h3>
                <p className="text-muted-foreground mb-4">
                  Comece planejando sua primeira mudança
                </p>
                <Button asChild>
                  <Link href="/app/nova-mudanca">
                    <Plus className="mr-2 h-4 w-4" />
                    Criar Primeira Mudança
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {mudancas?.map((mudanca: any) => (
                  <div
                    key={mudanca.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => router.push(`/app/mudancas/${mudanca.id}`)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Truck className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          {mudanca.enderecoOrigem} → {mudanca.enderecoDestino}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {mudanca.dataDesejada 
                            ? new Date(mudanca.dataDesejada).toLocaleDateString('pt-BR')
                            : "Data não definida"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        mudanca.status === "CONCLUIDA" 
                          ? "bg-green-100 text-green-800"
                          : mudanca.status === "CANCELADA"
                          ? "bg-red-100 text-red-800"
                          : mudanca.status === "EM_ANDAMENTO"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {mudanca.status.replace(/_/g, " ")}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}