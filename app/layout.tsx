import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MudaFácil - Monte sua mudança visualmente",
  description: "Arraste seus móveis, escolha o caminhão e mude sem estresse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
