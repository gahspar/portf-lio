import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Developer Systems — Soluções Digitais",
  description: "Sites profissionais, sistemas sob medida e automações para transformar processos em resultados.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
