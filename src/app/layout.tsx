import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#FFE4E8] selection:text-[#C92A42]">
        {children}
      </body>
    </html>
  );
}

