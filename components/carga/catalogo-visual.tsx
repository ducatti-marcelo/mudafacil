"use client";

import { 
  Refrigerator, 
  Bed, 
  Sofa, 
  Box, 
  Monitor, 
  TV,
  WashingMachine,
  Table,
  Chair,
  Lamp,
  BookOpen,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ItemCatalogo {
  id: string;
  nome: string;
  categoria: string;
  icone: React.ReactNode;
  larguraCm: number;
  alturaCm: number;
  profundidadeCm: number;
  pesoKg: number;
  volumeM3: number;
  cor: string;
}

const categorias = [
  { id: "quarto", nome: "Quarto" },
  { id: "sala", nome: "Sala" },
  { id: "cozinha", nome: "Cozinha" },
  { id: "escritorio", nome: "Escritório" },
  { id: "caixas", nome: "Caixas" },
];

const itensCatalogo: ItemCatalogo[] = [
  // Quarto
  {
    id: "cama-casal",
    nome: "Cama de Casal",
    categoria: "quarto",
    icone: <Bed className="h-6 w-6" />,
    larguraCm: 190,
    alturaCm: 130,
    profundidadeCm: 50,
    pesoKg: 45,
    volumeM3: 1.24,
    cor: "bg-purple-100",
  },
  {
    id: "cama-solteiro",
    nome: "Cama de Solteiro",
    categoria: "quarto",
    icone: <Bed className="h-6 w-6" />,
    larguraCm: 190,
    alturaCm: 90,
    profundidadeCm: 50,
    pesoKg: 30,
    volumeM3: 0.85,
    cor: "bg-purple-100",
  },
  {
    id: "guarda-roupa",
    nome: "Guarda-roupa",
    categoria: "quarto",
    icone: <Box className="h-6 w-6" />,
    larguraCm: 120,
    alturaCm: 200,
    profundidadeCm: 60,
    pesoKg: 80,
    volumeM3: 1.44,
    cor: "bg-purple-100",
  },
  {
    id: "criado-mudo",
    nome: "Criado Mudo",
    categoria: "quarto",
    icone: <Box className="h-6 w-6" />,
    larguraCm: 40,
    alturaCm: 50,
    profundidadeCm: 35,
    pesoKg: 8,
    volumeM3: 0.07,
    cor: "bg-purple-100",
  },
  
  // Sala
  {
    id: "sofa-3-lugares",
    nome: "Sofá 3 Lugares",
    categoria: "sala",
    icone: <Sofa className="h-6 w-6" />,
    larguraCm: 200,
    alturaCm: 85,
    profundidadeCm: 90,
    pesoKg: 60,
    volumeM3: 1.53,
    cor: "bg-blue-100",
  },
  {
    id: "sofa-2-lugares",
    nome: "Sofá 2 Lugares",
    categoria: "sala",
    icone: <Sofa className="h-6 w-6" />,
    larguraCm: 150,
    alturaCm: 85,
    profundidadeCm: 90,
    pesoKg: 45,
    volumeM3: 1.15,
    cor: "bg-blue-100",
  },
  {
    id: "poltrona",
    nome: "Poltrona",
    categoria: "sala",
    icone: <Chair className="h-6 w-6" />,
    larguraCm: 80,
    alturaCm: 90,
    profundidadeCm: 85,
    pesoKg: 25,
    volumeM3: 0.61,
    cor: "bg-blue-100",
  },
  {
    id: "mesa-center",
    nome: "Mesa Center",
    categoria: "sala",
    icone: <Table className="h-6 w-6" />,
    larguraCm: 120,
    alturaCm: 45,
    profundidadeCm: 70,
    pesoKg: 20,
    volumeM3: 0.38,
    cor: "bg-blue-100",
  },
  {
    id: "tv-50",
    nome: "TV 50\"",
    categoria: "sala",
    icone: <TV className="h-6 w-6" />,
    larguraCm: 110,
    alturaCm: 65,
    profundidadeCm: 8,
    pesoKg: 12,
    volumeM3: 0.06,
    cor: "bg-blue-100",
  },
  {
    id: "armario-tv",
    nome: "Armário TV",
    categoria: "sala",
    icone: <Box className="h-6 w-6" />,
    larguraCm: 150,
    alturaCm: 50,
    profundidadeCm: 40,
    pesoKg: 35,
    volumeM3: 0.3,
    cor: "bg-blue-100",
  },
  
  // Cozinha
  {
    id: "geladeira",
    nome: "Geladeira",
    categoria: "cozinha",
    icone: <Refrigerator className="h-6 w-6" />,
    larguraCm: 70,
    alturaCm: 170,
    profundidadeCm: 70,
    pesoKg: 80,
    volumeM3: 0.83,
    cor: "bg-green-100",
  },
  {
    id: "fogao",
    nome: "Fogão",
    categoria: "cozinha",
    icone: <Box className="h-6 w-6" />,
    larguraCm: 60,
    alturaCm: 90,
    profundidadeCm: 60,
    pesoKg: 40,
    volumeM3: 0.32,
    cor: "bg-green-100",
  },
  {
    id: "maquina-lavar",
    nome: "Máquina de Lavar",
    categoria: "cozinha",
    icone: <WashingMachine className="h-6 w-6" />,
    larguraCm: 60,
    alturaCm: 85,
    profundidadeCm: 60,
    pesoKg: 50,
    volumeM3: 0.31,
    cor: "bg-green-100",
  },
  {
    id: "mesa-cozinha",
    nome: "Mesa Cozinha",
    categoria: "cozinha",
    icone: <Table className="h-6 w-6" />,
    larguraCm: 120,
    alturaCm: 75,
    profundidadeCm: 80,
    pesoKg: 25,
    volumeM3: 0.72,
    cor: "bg-green-100",
  },
  
  // Escritório
  {
    id: "escrivaninha",
    nome: "Escrivaninha",
    categoria: "escritorio",
    icone: <Table className="h-6 w-6" />,
    larguraCm: 120,
    alturaCm: 75,
    profundidadeCm: 60,
    pesoKg: 30,
    volumeM3: 0.54,
    cor: "bg-yellow-100",
  },
  {
    id: "cadeira-escritorio",
    nome: "Cadeira Escritório",
    categoria: "escritorio",
    icone: <Chair className="h-6 w-6" />,
    larguraCm: 60,
    alturaCm: 120,
    profundidadeCm: 60,
    pesoKg: 15,
    volumeM3: 0.43,
    cor: "bg-yellow-100",
  },
  {
    id: "monitor",
    nome: "Monitor",
    categoria: "escritorio",
    icone: <Monitor className="h-6 w-6" />,
    larguraCm: 60,
    alturaCm: 45,
    profundidadeCm: 20,
    pesoKg: 5,
    volumeM3: 0.05,
    cor: "bg-yellow-100",
  },
  {
    id: "estante",
    nome: "Estante",
    categoria: "escritorio",
    icone: <BookOpen className="h-6 w-6" />,
    larguraCm: 80,
    alturaCm: 180,
    profundidadeCm: 30,
    pesoKg: 35,
    volumeM3: 0.43,
    cor: "bg-yellow-100",
  },
  
  // Caixas
  {
    id: "caixa-p",
    nome: "Caixa P",
    categoria: "caixas",
    icone: <Package className="h-6 w-6" />,
    larguraCm: 30,
    alturaCm: 30,
    profundidadeCm: 30,
    pesoKg: 8,
    volumeM3: 0.027,
    cor: "bg-orange-100",
  },
  {
    id: "caixa-m",
    nome: "Caixa M",
    categoria: "caixas",
    icone: <Package className="h-6 w-6" />,
    larguraCm: 40,
    alturaCm: 40,
    profundidadeCm: 40,
    pesoKg: 12,
    volumeM3: 0.064,
    cor: "bg-orange-100",
  },
  {
    id: "caixa-g",
    nome: "Caixa G",
    categoria: "caixas",
    icone: <Package className="h-6 w-6" />,
    larguraCm: 50,
    alturaCm: 50,
    profundidadeCm: 50,
    pesoKg: 18,
    volumeM3: 0.125,
    cor: "bg-orange-100",
  },
];

interface CatalogoVisualProps {
  onSelectItem: (item: ItemCatalogo) => void;
}

export function CatalogoVisual({ onSelectItem }: CatalogoVisualProps) {
  return (
    <div className="space-y-6">
      {categorias.map((categoria) => (
        <div key={categoria.id}>
          <h3 className="font-medium mb-3">{categoria.nome}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {itensCatalogo
              .filter((item) => item.categoria === categoria.id)
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className={cn(
                    "flex flex-col items-center p-3 rounded-lg border hover:shadow-md transition-all hover:border-primary/50",
                    item.cor
                  )}
                >
                  {item.icone}
                  <span className="text-sm mt-2 font-medium">{item.nome}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.volumeM3.toFixed(2)}m³
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.pesoKg}kg
                  </span>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { itensCatalogo };