import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mochimoo — Mochi Lembut, Bikin Harimu Manis ✨",
  description: "Artisan Daifuku Mochi khas Jepang dengan buah segar harian, lumeran cokelat premium, dan kemasan hampers manis. Pesan cepat via WhatsApp!",
  keywords: ["mochi", "daifuku", "ichigo daifuku", "mochi strawberry", "hampers mochi", "mochimoo"],
  openGraph: {
    title: "mochimoo — Mochi Lembut, Bikin Harimu Manis",
    description: "Nikmati sensasi mochi buah lembut kenyal dengan isian lumer segar setiap hari.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fredoka.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#FFE4E8] selection:text-[#C92A42]">
        {children}
      </body>
    </html>
  );
}

