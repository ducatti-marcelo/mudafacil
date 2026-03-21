# 🚀 Guia de Deploy - MudaFácil (ETAPA 0)

## PASSO 1: Criar Repositório no GitHub

### 1.1 Acesse o GitHub
- Vá para https://github.com
- Faça login (ou crie uma conta se necessário)

### 1.2 Crie o Repositório
1. Clique no ícone **+** no canto superior direito
2. Selecione **"New repository"**
3. Preencha:
   - **Repository name**: `mudafacil` (ou `muda-facil`)
   - **Description**: "Arraste seus móveis, escolha o caminhão e mude sem estresse"
   - **Visibility**: Público (recomendado para MVP) ou Privado
   - ❌ NÃO marque "Add a README file" (já temos)
   - ❌ NÃO marque "Add .gitignore" (já temos)
   - ❌ NÃO marque "Choose a license"
4. Clique em **"Create repository"**

### 1.3 Conectar repositório local ao GitHub
Após criar, o GitHub mostrará os comandos. Copie e execute no terminal:

```bash
# Navegue até o projeto (se já não estiver)
cd "/Users/ducattist02/Documents/UX:UI/teste leandro"

# Adicionar remote do GitHub (SUBSTITUA pelo seu usuário)
git remote add origin https://github.com/SEU-USUARIO/mudafacil.git

# Renomear branch para main (se necessário)
git branch -M main

# Push do código
git push -u origin main
```

---

## PASSO 2: Criar Banco PostgreSQL no Neon

### 2.1 Criar conta no Neon
1. Acesse https://neon.tech
2. Clique em **"Sign Up"**
3. Escolha **"Sign up with GitHub"** (mais fácil)

### 2.2 Criar projeto
1. No dashboard, clique em **"Create Project"**
2. Preencha:
   - **Project name**: `mudafacil`
   - **Database name**: `mudafacil` (ou deixe o padrão)
   - **Region**: escolha a mais próxima (ex: `AWS São Paulo`)
3. Clique em **"Create Project"**

### 2.3 Copiar Connection String
1. Após criar, você verá a **Connection String**
2. Clique no botão **"Copy"** ao lado de `DATABASE_URL`
3. Guarde esse valor - você vai precisar no Vercel!

O formato será algo como:
```
postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/mudafacil?sslmode=require
```

---

## PASSO 3: Conectar Vercel ao Repositório

### 3.1 Criar conta no Vercel
1. Acesse https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"** (conecta automaticamente)

### 3.2 Importar projeto
1. No dashboard do Vercel, clique em **"Add New..."**
2. Selecione **"Project"**
3. Na lista de repositórios, encontre `mudafacil`
4. Clique em **"Import"**

### 3.3 Configurar projeto
1. **Project Name**: `mudafacil` (ou como preferir)
2. **Framework Preset**: Next.js (deve detectar automaticamente)
3. **Root Directory**: `./` (padrão)

### 3.4 Adicionar Variáveis de Ambiente ⚠️ IMPORTANTIClique em **"Environment Variables"** e adicione:

| Nome | Valor |
|------|-------|
| `DATABASE_URL` | Sua connection string do Neon (copiou no Passo 2.3) |
| `AUTH_SECRET` | Execute: `openssl rand -base64 32` no terminal |
| `AUTH_GOOGLE_ID` | (deixe vazio por enquanto - configurar depois) |
| `AUTH_GOOGLE_SECRET` | (deixe vazio por enquanto - configurar depois) |
| `NEXT_PUBLIC_APP_URL` | `https://mudafacil.vercel.app` |
| `STRIPE_SECRET_KEY` | (deixe vazio - configurar depois) |
| `STRIPE_WEBHOOK_SECRET` | (deixe vazio - configurar depois) |
| `STRIPE_PRICE_ID_PRO` | (deixe vazio - configurar depois) |
| `RESEND_API_KEY` | (deixe vazio - configurar depois) |

Para gerar o AUTH_SECRET, execute no terminal:
```bash
openssl rand -base64 32
```

### 3.5 Fazer Deploy
1. Clique em **"Deploy"**
2. Aguarde 1-2 minutos
3. ✅ Se der tudo certo, você verá "Congratulations!"

---

## PASSO 4: Verificar Deploy

### 4.1 Acessar o site
- O Vercel vai dar uma URL como: `https://mudafacil.vercel.app`
- Clique no link ou acesse no navegador
- Você deve ver a landing page do MudaFácil!

### 4.2 Verificar logs (se der erro)
1. Vá para o projeto no Vercel
2. Clique na aba **"Deployments"**
3. Clique no último deployment
4. Veja os logs em **"Building"** ou **"Routing"**

---

## PASSO 5: Configurar Domínio Personalizado (Opcional)

### 5.1 Domínio gratuito do Vercel
O Vercel já dá um domínio `.vercel.app` grátis (ex: `mudafacil.vercel.app`)

### 5.2 Domínio próprio (opcional)
1. No projeto do Vercel, vá em **"Settings"** → **"Domains"**
2. Digite seu domínio (ex: `mudafacil.com.br`)
3. Siga as instruções de DNS do Vercel

---

## ✅ RESULTADO ESPERADO

Ao terminar, você deve ter:

| Item | Status |
|------|--------|
| Repo no GitHub com código | ✅ |
| Site funcionando | ✅ `https://mudafacil.vercel.app` |
| Deploy automático | ✅ Cada push no GitHub atualiza o site |

---

## 🔧 Comandos Úteis

```bash
# Ver status do git
git status

# Adicionar mudanças
git add -A

# Commit
git commit -m "sua mensagem"

# Push (após configurar remote)
git push origin main
```

---

## 📝 Próximas Etapas (após deploy)

1. **Configurar Google OAuth**: https://console.cloud.google.com
2. **Configurar Stripe**: https://dashboard.stripe.com
3. **Configurar Resend**: https://resend.com
4. **Popular banco com dados iniciais** (caminhões, itens do catálogo)
