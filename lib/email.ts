import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, name: string) {
  await resend.emails.send({
    from: "MudaFácil <noreply@seudominio.com>",
    to: email,
    subject: "Bem-vindo ao MudaFácil!",
    html: `
      <h1>Olá ${name}!</h1>
      <p>Bem-vindo ao MudaFácil, sua plataforma para mudanças sem estresse.</p>
      <p>Você tem 14 dias de trial grátis para usar todas as funcionalidades.</p>
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/app">Começar agora</a>
    `,
  });
}

export async function sendMagicLinkEmail(email: string, url: string) {
  await resend.emails.send({
    from: "MudaFácil <noreply@seudominio.com>",
    to: email,
    subject: "Link de acesso ao MudaFácil",
    html: `
      <h1>Seu link de acesso</h1>
      <p>Clique no link abaixo para entrar no MudaFácil:</p>
      <a href="${url}">Entrar no MudaFácil</a>
      <p>Este link expira em 24 horas.</p>
    `,
  });
}

export async function sendTrialEndingEmail(email: string, daysLeft: number) {
  await resend.emails.send({
    from: "MudaFácil <noreply@seudominio.com>",
    to: email,
    subject: `Seu trial acaba em ${daysLeft} dias`,
    html: `
      <h1>Seu trial está acabando</h1>
      <p>Seu período de trial gratuito acaba em ${daysLeft} dias.</p>
      <p>Faça upgrade para o plano PRO e continue usando todas as funcionalidades.</p>
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/settings/billing">Fazer upgrade</a>
    `,
  });
}