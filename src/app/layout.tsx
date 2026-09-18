import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Sora } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import brandMark from "./image.png";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftCraft Bolivia | Software a medida e IA aplicada",
  description:
    "SoftCraft Bolivia convierte problemas de operación en software a medida, automatización e IA aplicada con acompañamiento continuo.",
  keywords: [
    "desarrollo de software",
    "inteligencia artificial",
    "software a medida",
    "Bolivia",
    "Cochabamba",
  ],
  authors: [{ name: "SoftCraft Bolivia" }],
  icons: {
    icon: brandMark.src,
    shortcut: brandMark.src,
    apple: brandMark.src,
  },
  openGraph: {
    title: "SoftCraft Bolivia | Software a medida e IA aplicada",
    description:
      "Soluciones de software a medida, automatización e IA aplicada para problemas reales.",
    type: "website",
    locale: "es_BO",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftCraft Bolivia | Software a medida e IA aplicada",
    description:
      "Soluciones de software a medida, automatización e IA aplicada para problemas reales.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="grain flex min-h-full flex-col bg-abyss text-cream">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="relative flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
