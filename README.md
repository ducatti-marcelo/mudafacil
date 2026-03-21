# MudaFácil

Arraste seus móveis, escolha o caminhão e mude sem estresse.

## 🚀 Getting Started

### Pré-requisitos

- Node.js v18+
- npm v9+
- Git v2+
- PostgreSQL (Neon)

### Instalação

1. Clone o repositório:
```bash
git clone <repo-url>
cd mudafacil
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite .env com suas credenciais
```

4. Configure o banco de dados:
```bash
npm run db:push
```

5. Gere as CSS variables:
```bash
npm run tokens
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
mudafacil/
├── app/                    # App Router
│   ├── (public)/          # Rotas públicas
│   ├── (auth)/            # Rotas protegidas
│   └── api/               # API routes
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── forms/            # Componentes de formulário
│   ├── layout/           # Componentes de layout
│   └── paywall/          # Componentes de paywall
├── lib/                   # Utilitários e configurações
├── prisma/               # Schema do banco de dados
├── design-system/        # Design tokens e gerador CSS
└── stories/              # Storybook stories
```

## 🛠️ Comandos

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run build            # Gera build de produção
npm run start            # Inicia servidor de produção

# Database
npm run db:push          # Sincroniza schema com banco
npm run db:migrate       # Executa migrations
npm run db:studio        # Abre Prisma Studio

# Design System
npm run tokens           # Gera CSS variables
npm run tokens:check     # Verifica sincronização

# Storybook
npm run storybook        # Inicia Storybook
npm run build-storybook  # Gera build do Storybook
```

## 📋 Funcionalidades

- **Canvas de carga interativo** — Arraste ícones de móveis para montar sua carga
- **Seletor de caminhão** — Compare 4 tamanhos com barra de ocupação em tempo real
- **Catálogo visual** — 40+ ícones categorizados de móveis e itens
- **Filtros de cotação** — Filtre e compare transportadoras
- **Resumo inteligente** — Volume, peso e ocupação em tempo real

## 💰 Preços

| Plano | Preço | Recursos |
|-------|-------|----------|
| FREE | R$ 0 | 1 mudança, 15 itens, 3 cotações |
| TRIAL | Grátis (14 dias) | Tudo ilimitado |
| PRO | R$ 29,90/mês | Tudo ilimitado |

## 📄 Licença

MIT