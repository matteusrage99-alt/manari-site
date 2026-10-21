import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/manari";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
