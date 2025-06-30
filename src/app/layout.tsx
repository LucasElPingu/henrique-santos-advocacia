// ./src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

// ALTERAÇÃO: Metadados otimizados para SEO
export const metadata: Metadata = {
  // Título otimizado: Inclui o nome, a atividade principal e a localização.
  title:
    "Henrique Santos Advocacia | Escritório de Advocacia em João Pessoa, PB",
  // Descrição otimizada: Um texto claro e profissional que inclui palavras-chave importantes.
  description:
    "Escritório de advocacia em João Pessoa, Paraíba, com atuação séria e comprometida. Oferecemos soluções jurídicas personalizadas em diversas áreas do direito, incluindo Direito de Família, Empresarial e do Consumidor. Entre em contacto para uma consultoria especializada.",
  // Keywords: Embora o Google não as use para ranking, não custa adicioná-las.
  keywords: [
    "advogado em joão pessoa",
    "henrique santos advocacia",
    "escritório de advocacia paraíba",
    "direito de família",
    "direito empresarial",
  ],
  // Metadados para redes sociais (Open Graph)
  openGraph: {
    title: "Henrique Santos Advocacia | João Pessoa - PB",
    description: "Assessoria jurídica séria e comprometida na Paraíba.",
    url: "https://www.henriquesantosadvocacia.com.br", // Substitua pelo seu domínio final
    siteName: "Henrique Santos Advocacia",
    images: [
      {
        url: "/images/og-image.jpg", // Crie uma imagem de 1200x630px para partilhas
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <div className="gold-divider" />
        <main>{children}</main>
      </body>
    </html>
  );
}
