"use client";

import { cn } from "@/lib/utils";
import { Truck, Check } from "lucide-react";

interface Caminhao {
  id: string;
  nome: string;
  tipo: string;
  capacidadeM3: number;
  capacidadeKg: number;
  comprimentoCm: number;
  larguraCm: number;
  alturaCm: number;
}

interface CaminhaoSelectorProps {
  caminhoes: Caminhao[];
  selectedId: string | null;
  onSelect: (caminhao: Caminhao) => void;
  volumeAtual: number;
  pesoAtual: number;
}

export function CaminhaoSelector({
  caminhoes,
  selectedId,
  onSelect,
  volumeAtual,
  pesoAtual,
}: CaminhaoSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Selecione o Caminhão</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {caminhoes.map((caminhao) => {
          const isSelected = caminhao.id === selectedId;
          const ocupacaoVolume = (volumeAtual / caminhao.capacidadeM3) * 100;
          const ocupacaoPeso = (pesoAtual / caminhao.capacidadeKg) * 100;
          const isOverCapacity = ocupacaoVolume > 100 || ocupacaoPeso > 100;

          return (
            <button
              key={caminhao.id}
              onClick={() => onSelect(caminhao)}
              className={cn(
                "relative p-4 rounded-lg border-2 text-left transition-all hover:shadow-md",
                isSelected
                  ? "border-primary bg-primary/5"
                  : isOverCapacity
                  ? "border-red-200 bg-red-50"
                  : "border-border hover:border-primary/50"
              )}
            >
              {isSelected && (
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4" />
                </div>
              )}

              <div className="flex items-center gap-3 mb-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  isSelected ? "bg-primary text-white" : "bg-gray-100"
                )}>
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{caminhao.nome}</h4>
                  <p className="text-xs text-muted-foreground">{caminhao.tipo}</p>
                </div>
              </div>

              <div className="space-y-2">
                {/* Barra de ocupação de volume */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Volume</span>
                    <span className={cn(
                      "font-medium",
                      isOverCapacity ? "text-red-600" : "text-foreground"
                    )}>
                      {volumeAtual.toFixed(1)}/{caminhao.capacidadeM3}m³
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full transition-all",
                        ocupacaoVolume > 100
                          ? "bg-red-500"
                          : ocupacaoVolume > 80
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      )}
                      style={{ width: `${Math.min(100, ocupacaoVolume)}%` }}
                    />
                  </div>
                </div>

                {/* Barra de ocupação de peso */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Peso</span>
                    <span className={cn(
                      "font-medium",
                      isOverCapacity ? "text-red-600" : "text-foreground"
                    )}>
                      {pesoAtual.toFixed(0)}/{caminhao.capacidadeKg}kg
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full transition-all",
                        ocupacaoPeso > 100
                          ? "bg-red-500"
                          : ocupacaoPeso > 80
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      )}
                      style={{ width: `${Math.min(100, ocupacaoPeso)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Alerta de capacidade */}
              {isOverCapacity && isSelected && (
                <div className="mt-2 text-xs text-red-600 font-medium">
                  ⚠️ Acima da capacidade
                </div>
              )}

              {/* Dimensões */}
              <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
                <p>{caminhao.comprimentoCm}x{caminhao.larguraCm}x{caminhao.alturaCm}cm</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}