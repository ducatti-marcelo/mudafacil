"use client";

import { cn } from "@/lib/utils";
import { 
  Package, 
  Weight, 
  Box, 
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from "lucide-react";

interface ResumoCargaProps {
  volumeTotal: number;
  pesoTotal: number;
  caminhaoSelecionado: {
    nome: string;
    capacidadeM3: number;
    capacidadeKg: number;
  } | null;
  totalItens: number;
}

export function ResumoCarga({
  volumeTotal,
  pesoTotal,
  caminhaoSelecionado,
  totalItens,
}: ResumoCargaProps) {
  const ocupacaoVolume = caminhaoSelecionado
    ? (volumeTotal / caminhaoSelecionado.capacidadeM3) * 100
    : 0;
  
  const ocupacaoPeso = caminhaoSelecionado
    ? (pesoTotal / caminhaoSelecionado.capacidadeKg) * 100
    : 0;

  const isOverCapacity = caminhaoSelecionado && (
    ocupacaoVolume > 100 || ocupacaoPeso > 100
  );

  const isNearCapacity = caminhaoSelecionado && !isOverCapacity && (
    ocupacaoVolume > 80 || ocupacaoPeso > 80
  );

  return (
    <div className="space-y-4">
      <h3 className="font-medium flex items-center gap-2">
        <Box className="h-5 w-5" />
        Resumo da Carga
      </h3>

      {/* Estatísticas principais */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Package className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Volume</span>
          </div>
          <p className="text-xl font-bold">{volumeTotal.toFixed(2)} m³</p>
          {caminhaoSelecionado && (
            <p className="text-xs text-muted-foreground">
              de {caminhaoSelecionado.capacidadeM3} m³
            </p>
          )}
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Weight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Peso</span>
          </div>
          <p className="text-xl font-bold">{pesoTotal.toFixed(0)} kg</p>
          {caminhaoSelecionado && (
            <p className="text-xs text-muted-foreground">
              de {caminhaoSelecionado.capacidadeKg} kg
            </p>
          )}
        </div>
      </div>

      {/* Total de itens */}
      <div className="p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Total de itens</span>
          </div>
          <span className="font-bold">{totalItens}</span>
        </div>
      </div>

      {/* Barra de ocupação do caminhão */}
      {caminhaoSelecionado && (
        <div className="p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">{caminhaoSelecionado.nome}</span>
            <div className="flex items-center gap-1">
              {isOverCapacity ? (
                <AlertTriangle className="h-4 w-4 text-red-500" />
              ) : isNearCapacity ? (
                <TrendingUp className="h-4 w-4 text-yellow-500" />
              ) : (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
              <span className={cn(
                "text-sm font-medium",
                isOverCapacity ? "text-red-600" : isNearCapacity ? "text-yellow-600" : "text-green-600"
              )}>
                {Math.max(ocupacaoVolume, ocupacaoPeso).toFixed(0)}%
              </span>
            </div>
          </div>

          {/* Barra de volume */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Volume</span>
                <span>{ocupacaoVolume.toFixed(0)}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full transition-all duration-300",
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

            {/* Barra de peso */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Peso</span>
                <span>{ocupacaoPeso.toFixed(0)}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full transition-all duration-300",
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

          {/* Alertas */}
          {isOverCapacity && (
            <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
              <AlertTriangle className="h-4 w-4 inline mr-1" />
              Carga excede a capacidade do caminhão! Considere um veículo maior ou reduza os itens.
            </div>
          )}
          {isNearCapacity && !isOverCapacity && (
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-700">
              <TrendingUp className="h-4 w-4 inline mr-1" />
              Carga próxima ao limite. Adicione mais itens com cautela.
            </div>
          )}
        </div>
      )}

      {/* Sem caminhão selecionado */}
      {!caminhaoSelecionado && totalItens > 0 && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
          <Package className="h-4 w-4 inline mr-1" />
          Selecione um caminhão para ver a ocupação
        </div>
      )}
    </div>
  );
}