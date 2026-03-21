"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CargaCanvas } from "@/components/carga/carga-canvas";
import { CaminhaoSelector } from "@/components/carga/caminhao-selector";
import { CatalogoVisual, itensCatalogo, ItemCatalogo } from "@/components/carga/catalogo-visual";
import { ResumoCarga } from "@/components/carga/resumo-carga";
import { TrialBanner } from "@/components/paywall/trial-banner";
import { 
  ArrowLeft, 
  ArrowRight, 
  Save,
  MapPin,
  Calendar,
  Truck
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

// Dados mock de caminhões
const caminhoes = [
  {
    id: "fiorino",
    nome: "Fiorino",
    tipo: "Pequeno",
    capacidadeM3: 6,
    capacidadeKg: 600,
    comprimentoCm: 200,
    larguraCm: 150,
    alturaCm: 150,
  },
  {
    id: "hr",
    nome: "HR",
    tipo: "Médio",
    capacidadeM3: 12,
    capacidadeKg: 1200,
    comprimentoCm: 280,
    larguraCm: 160,
    alturaCm: 160,
  },
  {
    id: "tres-quarto",
    nome: "3/4",
    tipo: "Grande",
    capacidadeM3: 20,
    capacidadeKg: 2500,
    comprimentoCm: 420,
    larguraCm: 190,
    alturaCm: 190,
  },
  {
    id: "bau",
    nome: "Baú",
    tipo: "Extra Grande",
    capacidadeM3: 35,
    capacidadeKg: 5000,
    comprimentoCm: 600,
    larguraCm: 240,
    alturaCm: 240,
  },
];

type Step = "info" | "carga" | "caminhao" | "revisao";

export default function NovaMudancaPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [step, setStep] = useState<Step>("info");
  const [isSaving, setIsSaving] = useState(false);

  // Form state
  const [enderecoOrigem, setEnderecoOrigem] = useState("");
  const [enderecoDestino, setEnderecoDestino] = useState("");
  const [dataDesejada, setDataDesejada] = useState("");

  // Carga state
  const [itens, setItens] = useState<any[]>([]);
  const [caminhaoSelecionado, setCaminhaoSelecionado] = useState<(typeof caminhoes)[0] | null>(null);

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const volumeTotal = itens.reduce((acc, item) => acc + item.volumeM3, 0);
  const pesoTotal = itens.reduce((acc, item) => acc + item.pesoKg, 0);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simular salvamento
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Mudança salva com sucesso!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao salvar mudança");
    } finally {
      setIsSaving(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case "info":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Endereço de Origem
                </label>
                <Input
                  placeholder="Rua, número, bairro, cidade"
                  value={enderecoOrigem}
                  onChange={(e) => setEnderecoOrigem(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Endereço de Destino
                </label>
                <Input
                  placeholder="Rua, número, bairro, cidade"
                  value={enderecoDestino}
                  onChange={(e) => setEnderecoDestino(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Data Desejada (opcional)
                </label>
                <Input
                  type="date"
                  value={dataDesejada}
                  onChange={(e) => setDataDesejada(e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case "carga":
        return (
          <div className="space-y-6">
            <CatalogoVisual
              onSelectItem={(item: ItemCatalogo) => {
                const novoItem = {
                  ...item,
                  id: `${item.id}-${Date.now()}`,
                  x: 50,
                  y: 50,
                  rotacao: 0,
                };
                setItens([...itens, novoItem]);
              }}
            />
            {itens.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Itens Adicionados</CardTitle>
                  <CardDescription>
                    {itens.length} itens na carga
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {itens.map((item, index) => (
                      <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span>{item.nome}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const newItens = [...itens];
                            newItens.splice(index, 1);
                            setItens(newItens);
                          }}
                        >
                          Remover
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case "caminhao":
        return (
          <div className="space-y-6">
            <CaminhaoSelector
              caminhoes={caminhoes}
              selectedId={caminhaoSelecionado?.id || null}
              onSelect={setCaminhaoSelecionado}
              volumeAtual={volumeTotal}
              pesoAtual={pesoTotal}
            />
          </div>
        );

      case "revisao":
        return (
          <div className="space-y-6">
            <ResumoCarga
              volumeTotal={volumeTotal}
              pesoTotal={pesoTotal}
              caminhaoSelecionado={caminhaoSelecionado}
              totalItens={itens.length}
            />

            <Card>
              <CardHeader>
                <CardTitle>Detalhes da Mudança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Origem</p>
                  <p className="font-medium">{enderecoOrigem || "Não informado"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Destino</p>
                  <p className="font-medium">{enderecoDestino || "Não informado"}</p>
                </div>
                {dataDesejada && (
                  <div>
                    <p className="text-sm text-muted-foreground">Data</p>
                    <p className="font-medium">
                      {new Date(dataDesejada).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-muted-foreground">Caminhão</p>
                  <p className="font-medium">{caminhaoSelecionado?.nome || "Não selecionado"}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  const steps = [
    { id: "info", label: "Informações" },
    { id: "carga", label: "Carga" },
    { id: "caminhao", label: "Caminhão" },
    { id: "revisao", label: "Revisão" },
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === step);

  return (
    <div className="min-h-screen bg-gray-50">
      <TrialBanner />
      
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Voltar
              </Link>
            </Button>
            <h1 className="text-xl font-bold">Nova Mudança</h1>
          </div>
          <Button onClick={handleSave} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </header>

      {/* Stepper */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((s, index) => (
              <div key={s.id} className="flex items-center">
                <button
                  onClick={() => setStep(s.id as Step)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    step === s.id
                      ? "bg-primary text-white"
                      : index < currentStepIndex
                      ? "bg-green-100 text-green-800"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-current opacity-20 flex items-center justify-center text-xs">
                    {index + 1}
                  </span>
                  {s.label}
                </button>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {renderStepContent()}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-8 border-t">
          <Button
            variant="outline"
            onClick={() => {
              const prevIndex = currentStepIndex - 1;
              if (prevIndex >= 0) {
                setStep(steps[prevIndex].id as Step);
              }
            }}
            disabled={currentStepIndex === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>

          {currentStepIndex < steps.length - 1 ? (
            <Button
              onClick={() => {
                const nextIndex = currentStepIndex + 1;
                setStep(steps[nextIndex].id as Step);
              }}
            >
              Próximo
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Salvando..." : "Finalizar"}
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}