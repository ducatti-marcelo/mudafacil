#!/usr/bin/env node
/**
 * Script de setup interativo para o MudaFácil
 * 
 * Este script configura automaticamente o arquivo .env
 * com as variáveis de ambiente necessárias.
 */

import fs from "fs";
import path from "path";
import { createInterface } from "readline";

const ENV_EXAMPLE_PATH = path.join(__dirname, "../.env.example");
const ENV_PATH = path.join(__dirname, "../.env");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log("\n🚀 MudaFácil - Setup\n");

  // Verifica se o .env já existe
  if (fs.existsSync(ENV_PATH)) {
    const overwrite = await question("O arquivo .env já existe. Deseja sobrescrever? (s/n): ");
    if (overwrite.toLowerCase() !== "s") {
      console.log("Setup cancelado.");
      process.exit(0);
    }
  }

  // Lê o arquivo .env.example
  const envExample = fs.readFileSync(ENV_EXAMPLE_PATH, "utf-8");

  console.log("\n📋 Configure as variáveis de ambiente:\n");

  // Database
  console.log("\n--- Database (Neon) ---");
  const databaseUrl = await question("DATABASE_URL: ");

  // Auth
  console.log("\n--- Auth.js ---");
  const authSecret = await question("AUTH_SECRET (deixe vazio para gerar): ");
  const authGoogleId = await question("AUTH_GOOGLE_ID: ");
  const authGoogleSecret = await question("AUTH_GOOGLE_SECRET: ");
  const authResendKey = await question("AUTH_RESEND_KEY: ");

  // Stripe
  console.log("\n--- Stripe ---");
  const stripeSecretKey = await question("STRIPE_SECRET_KEY: ");
  const stripeWebhookSecret = await question("STRIPE_WEBHOOK_SECRET: ");
  const stripePriceIdPro = await question("STRIPE_PRICE_ID_PRO: ");

  // App
  console.log("\n--- App ---");
  const appUrl = await question("NEXT_PUBLIC_APP_URL (padrão: http://localhost:3000): ");

  // Resend
  console.log("\n--- Resend ---");
  const resendApiKey = await question("RESEND_API_KEY: ");

  // Gera o conteúdo do .env
  const envContent = `# Database (Neon - https://neon.tech)
DATABASE_URL=${databaseUrl}

# Auth.js v5
AUTH_SECRET=${authSecret || "seu-secret-aqui"}
AUTH_GOOGLE_ID=${authGoogleId}
AUTH_GOOGLE_SECRET=${authGoogleSecret}
AUTH_RESEND_KEY=${authResendKey}

# Stripe (https://dashboard.stripe.com)
STRIPE_SECRET_KEY=${stripeSecretKey}
STRIPE_WEBHOOK_SECRET=${stripeWebhookSecret}
STRIPE_PRICE_ID_PRO=${stripePriceIdPro}

# App
NEXT_PUBLIC_APP_URL=${appUrl || "http://localhost:3000"}

# Resend (emails transacionais)
RESEND_API_KEY=${resendApiKey}
`;

  // Escreve o arquivo .env
  fs.writeFileSync(ENV_PATH, envContent, "utf-8");

  console.log("\n✅ Arquivo .env criado com sucesso!");
  console.log("\n📝 Próximos passos:");
  console.log("  1. Execute: npm install");
  console.log("  2. Execute: npm run db:push");
  console.log("  3. Execute: npm run tokens");
  console.log("  4. Execute: npm run dev");
  console.log("\n🎉 Seu MudaFácil está pronto!\n");

  rl.close();
}

main().catch(console.error);