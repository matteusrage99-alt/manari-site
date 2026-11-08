import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/data/manari";

/**
 * Fontes hospedadas localmente (next/font/local) em vez de next/font/google.
 *
 * Motivo: `next/font/google` trava o build com Turbopack (bug do
 * NextFontGoogleFontFileReplacer: "queries have exactly one entry"), e o build
 * padrão do Next 16 usa Turbopack. Isso impedia a geração da pasta `out/` e
 * fazia o deploy da Hostinger falhar. Com arquivos locais o build funciona em
 * Turbopack e em webpack.
 *
 * Os .woff2 são as fontes variáveis (subset latino, que cobre os acentos do
 * português) baixadas do Google Fonts — mesmas famílias de antes.
 */
const cormorant = localFont({
  src: "./fonts/cormorant-garamond-latin.woff2",
  variable: "--font-cormorant",
  weight: "300 600",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const pageTitle = "MANARI Experiências | Amazônia sensorial, imersiva e responsável";

export const metadata: Metadata = {
  // Base para resolver URLs absolutas (Open Graph/Twitter). Defina
  // NEXT_PUBLIC_SITE_URL com o domínio final quando for publicar.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: pageTitle,
    template: `%s · ${site.brand.shortName}`,
  },
  description: site.brand.description,
  applicationName: site.brand.name,
  keywords: [
    "turismo de experiências",
    "experiências na Amazônia",
    "experiências exclusivas Manaus",
    "Rio Negro",
    "vivências personalizadas",
    site.brand.name,
  ],
  openGraph: {
    title: pageTitle,
    description: site.brand.description,
    siteName: site.brand.name,
    type: "website",
    locale: "pt_BR",
    images: [
      { url: "/manari-banner.jpg", width: 1536, height: 614, alt: site.brand.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.brand.description,
    images: ["/manari-banner.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        {children}
      </body>
    </html>
  );
}
