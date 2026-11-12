import Header from "@/components/Header";
import MochimooBrandHero from "@/components/MochimooBrandHero";
import MarqueeBanner from "@/components/MarqueeBanner";
import MochimooBentoMenu from "@/components/MochimooBentoMenu";
import MochimooBoxSimulator from "@/components/MochimooBoxSimulator";
import MochimooWholesale from "@/components/MochimooWholesale";
import MochimooOrderTicket from "@/components/MochimooOrderTicket";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-canvas text-brand-main">
      <Header />
      <MochimooBrandHero />
      <MarqueeBanner />
      <MochimooBentoMenu />
      <MochimooBoxSimulator />
      <MochimooWholesale />
      <MochimooOrderTicket />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
