"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Filter, 
  Star, 
  Calendar, 
  Shield, 
  Truck,
  ArrowUpDown,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CotacaoFilterProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  precoMax: number | null;
  notaMin: number | null;
  dataDisponivel: string | null;
  seguroIncluso: boolean | null;
  tiposCaminhao: string[];
  orderBy: "preco" | "nota" | "data";
}

export function CotacaoFilter({ onFilterChange }: CotacaoFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    precoMax: null,
    notaMin: null,
    dataDisponivel: null,
    seguroIncluso: null,
    tiposCaminhao: [],
    orderBy: "preco",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleCaminhaoTipo = (tipo: string) => {
    const tipos = filters.tiposCaminhao.includes(tipo)
      ? filters.tiposCaminhao.filter((t) => t !== tipo)
      : [...filters.tiposCaminhao, tipo];
    updateFilter("tiposCaminhao", tipos);
  };

  const clearFilters = () => {
    const cleanFilters: FilterState = {
      precoMax: null,
      notaMin: null,
      dataDisponivel: null,
      seguroIncluso: null,
      tiposCaminhao: [],
      orderBy: "preco",
    };
    setFilters(cleanFilters);
    onFilterChange(cleanFilters);
  };

  const hasActiveFilters = 
    filters.precoMax !== null ||
    filters.notaMin !== null ||
    filters.dataDisponivel !== null ||
    filters.seguroIncluso !== null ||
    filters.tiposCaminhao.length > 0;

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Limpar
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Ordenação */}
        <div>
          <label className="text-sm font-medium mb-2 block">Ordenar por</label>
          <div className="flex gap-2">
            {[
              { value: "preco", label: "Preço" },
              { value: "nota", label: "Avaliação" },
              { value: "data", label: "Data" },
            ].map((option) => (
              <Button
                key={option.value}
                variant={filters.orderBy === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilter("orderBy", option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Filtros rápidos */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filters.seguroIncluso === true ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilter("seguroIncluso", filters.seguroIncluso === true ? null : true)}
          >
            <Shield className="h-4 w-4 mr-1" />
            Seguro incluso
          </Button>
          <Button
            variant={filters.notaMin !== null ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilter("notaMin", filters.notaMin !== null ? null : 4)}
          >
            <Star className="h-4 w-4 mr-1" />
            4+ estrelas
          </Button>
        </div>

        {/* Botão para mais filtros */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Ocultar filtros" : "Mais filtros"}
          <ArrowUpDown className="h-4 w-4 ml-1" />
        </Button>

        {/* Filtros expandidos */}
        {isExpanded && (
          <div className="space-y-4 pt-4 border-t">
            {/* Preço máximo */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Preço máximo (R$)
              </label>
              <Input
                type="number"
                placeholder="Sem limite"
                value={filters.precoMax || ""}
                onChange={(e) => updateFilter("precoMax", e.target.value ? Number(e.target.value) : null)}
              />
            </div>

            {/* Data disponível */}
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Data disponível
              </label>
              <Input
                type="date"
                value={filters.dataDisponivel || ""}
                onChange={(e) => updateFilter("dataDisponivel", e.target.value || null)}
              />
            </div>

            {/* Tipos de caminhão */}
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center gap-1">
                <Truck className="h-4 w-4" />
                Tipos de caminhão
              </label>
              <div className="flex flex-wrap gap-2">
                {["Fiorino", "HR", "3/4", "Baú"].map((tipo) => (
                  <Button
                    key={tipo}
                    variant={filters.tiposCaminhao.includes(tipo) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleCaminhaoTipo(tipo)}
                  >
                    {tipo}
                  </Button>
                ))}
              </div>
            </div>

            {/* Avaliação mínima */}
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center gap-1">
                <Star className="h-4 w-4" />
                Avaliação mínima
              </label>
              <div className="flex gap-2">
                {[3, 4, 4.5].map((nota) => (
                  <Button
                    key={nota}
                    variant={filters.notaMin === nota ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateFilter("notaMin", filters.notaMin === nota ? null : nota)}
                  >
                    {nota}+
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}