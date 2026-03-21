"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  Package, 
  RotateCcw, 
  Trash2, 
  Move,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Item {
  id: string;
  nome: string;
  icone: React.ReactNode;
  larguraCm: number;
  alturaCm: number;
  pesoKg: number;
  volumeM3: number;
  cor: string;
}

interface ItemPosicionado extends Item {
  x: number;
  y: number;
  rotacao: number;
}

interface CargaCanvasProps {
  caminhaoId: string;
  caminhaoDimensoes: {
    comprimentoCm: number;
    larguraCm: number;
    alturaCm: number;
  };
  itensBiblioteca: Item[];
  onItensChange: (itens: ItemPosicionado[]) => void;
}

const ESCALA_PX_POR_CM = 0.5; // 1cm = 0.5px

export function CargaCanvas({
  caminhaoId,
  caminhaoDimensoes,
  itensBiblioteca,
  onItensChange,
}: CargaCanvasProps) {
  const [itensPosicionados, setItensPosicionados] = useState<ItemPosicionado[]>([]);
  const [itemArrastando, setItemArrastando] = useState<ItemPosicionado | null>(null);
  const [offsetArrasto, setOffsetArrasto] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const larguraCanvas = caminhaoDimensoes.comprimentoCm * ESCALA_PX_POR_CM;
  const alturaCanvas = caminhaoDimensoes.larguraCm * ESCALA_PX_POR_CM;

  const adicionarItem = (item: Item, x: number, y: number) => {
    const novoItem: ItemPosicionado = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      x,
      y,
      rotacao: 0,
    };
    const novosItens = [...itensPosicionados, novoItem];
    setItensPosicionados(novosItens);
    onItensChange(novosItens);
  };

  const removerItem = (itemId: string) => {
    const novosItens = itensPosicionados.filter((i) => i.id !== itemId);
    setItensPosicionados(novosItens);
    onItensChange(novosItens);
  };

  const rotacionarItem = (itemId: string) => {
    const novosItens = itensPosicionados.map((i) =>
      i.id === itemId ? { ...i, rotacao: (i.rotacao + 90) % 360 } : i
    );
    setItensPosicionados(novosItens);
    onItensChange(novosItens);
  };

  const handleDragStart = (item: ItemPosicionado, e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    setItemArrastando(item);
    setOffsetArrasto({
      x: e.clientX - rect.left - item.x,
      y: e.clientY - rect.top - item.y,
    });
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (!itemArrastando || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left - offsetArrasto.x, larguraCanvas - 40));
    const y = Math.max(0, Math.min(e.clientY - rect.top - offsetArrasto.y, alturaCanvas - 40));

    const novosItens = itensPosicionados.map((i) =>
      i.id === itemArrastando.id ? { ...i, x, y } : i
    );
    setItensPosicionados(novosItens);
  };

  const handleDragEnd = () => {
    if (itemArrastando) {
      onItensChange(itensPosicionados);
    }
    setItemArrastando(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const itemData = e.dataTransfer.getData("application/json");
    if (!itemData) return;

    const item = JSON.parse(itemData);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;
    adicionarItem(item, x, y);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const volumeTotal = itensPosicionados.reduce((acc, i) => acc + i.volumeM3, 0);
  const pesoTotal = itensPosicionados.reduce((acc, i) => acc + i.pesoKg, 0);
  const capacidadeVolume = (caminhaoDimensoes.comprimentoCm * caminhaoDimensoes.larguraCm * caminhaoDimensoes.alturaCm) / 1000000;
  const ocupacaoPercentual = Math.min(100, (volumeTotal / capacidadeVolume) * 100);

  return (
    <div className="space-y-4">
      {/* Biblioteca de Itens */}
      <div className="p-4 bg-gray-50 rounded-lg border">
        <h3 className="text-sm font-medium mb-3">Arraste os itens para o canvas</h3>
        <div className="flex flex-wrap gap-2">
          {itensBiblioteca.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("application/json", JSON.stringify(item));
              }}
              className={cn(
                "flex flex-col items-center p-2 rounded border cursor-move hover:shadow-md transition-shadow",
                item.cor
              )}
            >
              {item.icone}
              <span className="text-xs mt-1">{item.nome}</span>
              <span className="text-[10px] text-muted-foreground">
                {item.volumeM3.toFixed(2)}m³
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="relative">
        <div className="absolute top-2 right-2 z-10 flex gap-1">
          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
            <ZoomOut className="h-4 w-4" />
          </Button>
        </div>

        <div
          ref={canvasRef}
          className="relative border-2 border-dashed border-gray-300 bg-white rounded-lg overflow-hidden"
          style={{
            width: larguraCanvas,
            height: alturaCanvas,
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {/* Grid de fundo */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: `${ESCALA_PX_POR_CM * 10}px ${ESCALA_PX_POR_CM * 10}px`,
            }}
          />

          {/* Itens posicionados */}
          {itensPosicionados.map((item) => (
            <div
              key={item.id}
              className={cn(
                "absolute cursor-move select-none",
                item.cor,
                "border rounded shadow-sm",
                item.id === itemArrastando?.id && "opacity-80 shadow-lg"
              )}
              style={{
                left: item.x,
                top: item.y,
                width: item.larguraCm * ESCALA_PX_POR_CM,
                height: item.alturaCm * ESCALA_PX_POR_CM,
                transform: `rotate(${item.rotacao}deg)`,
              }}
              onMouseDown={(e) => handleDragStart(item, e)}
            >
              <div className="flex flex-col items-center justify-center h-full p-1">
                {item.icone}
                <span className="text-[10px] mt-1 truncate w-full text-center">
                  {item.nome}
                </span>
              </div>

              {/* Controles do item */}
              <div className="absolute -top-2 -right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="h-5 w-5 bg-white border rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    rotacionarItem(item.id);
                  }}
                >
                  <RotateCcw className="h-3 w-3" />
                </button>
                <button
                  className="h-5 w-5 bg-white border rounded-full flex items-center justify-center hover:bg-red-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    removerItem(item.id);
                  }}
                >
                  <Trash2 className="h-3 w-3 text-red-500" />
                </button>
              </div>
            </div>
          ))}

          {/* Mensagem quando vazio */}
          {itensPosicionados.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Arraste itens para começar</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-muted-foreground">Volume Total</p>
          <p className="text-xl font-bold">{volumeTotal.toFixed(2)} m³</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-muted-foreground">Peso Estimado</p>
          <p className="text-xl font-bold">{pesoTotal.toFixed(0)} kg</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-muted-foreground">Ocupação</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all",
                  ocupacaoPercentual > 90 ? "bg-red-500" : ocupacaoPercentual > 70 ? "bg-yellow-500" : "bg-green-500"
                )}
                style={{ width: `${ocupacaoPercentual}%` }}
              />
            </div>
            <span className="text-sm font-medium">
              {ocupacaoPercentual.toFixed(0)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}