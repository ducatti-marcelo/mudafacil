import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
});

export const mudancaSchema = z.object({
  enderecoOrigem: z.string().min(5, "Endereço de origem é obrigatório"),
  enderecoDestino: z.string().min(5, "Endereço de destino é obrigatório"),
  dataDesejada: z.string().optional(),
  caminhaoId: z.string().optional(),
});

export const itemSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  categoria: z.string().min(1, "Categoria é obrigatória"),
  larguraCm: z.number().positive("Largura deve ser positiva"),
  alturaCm: z.number().positive("Altura deve ser positiva"),
  profundidadeCm: z.number().positive("Profundidade deve ser positiva"),
  pesoKg: z.number().positive("Peso deve ser positivo"),
});

export const cotacaoFilterSchema = z.object({
  precoMax: z.number().optional(),
  notaMin: z.number().min(0).max(5).optional(),
  dataDisponivel: z.string().optional(),
  seguroIncluso: z.boolean().optional(),
  tiposCaminhao: z.array(z.string()).optional(),
  orderBy: z.enum(["preco", "nota", "data"]).optional(),
});

export const cargaLayoutSchema = z.object({
  mudancaId: z.string(),
  caminhaoId: z.string(),
  itensPosicionados: z.array(
    z.object({
      itemId: z.string(),
      x: z.number(),
      y: z.number(),
      rotacao: z.number().default(0),
    })
  ),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type MudancaInput = z.infer<typeof mudancaSchema>;
export type ItemInput = z.infer<typeof itemSchema>;
export type CotacaoFilterInput = z.infer<typeof cotacaoFilterSchema>;
export type CargaLayoutInput = z.infer<typeof cargaLayoutSchema>;