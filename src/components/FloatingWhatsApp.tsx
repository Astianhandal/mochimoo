"use client";

// Sticky bottom CTA for mobile — primary action always within thumb reach
// Hidden at md+ where inline CTAs are visible (see globals.css .sticky-cta)
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/mochiData";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Mobile sticky CTA bar */}
      <div className="sticky-cta">
        <a
          href={getWhatsAppUrl("Halo mochimoo! Saya mau pesan mochi hari ini.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#D93848] text-white font-bold text-base shadow-lg shadow-[#D93848]/30 active:scale-95 transition-transform tap-target"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Pesan via WhatsApp</span>
        </a>
      </div>

      {/* Desktop floating button — only visible md+ */}
      <a
        href={getWhatsAppUrl("Halo mochimoo! Saya mau pesan mochi.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp mochimoo"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#5B8C51] text-white items-center justify-center shadow-xl shadow-[#5B8C51]/40 hover:bg-[#497241] active:scale-95 transition-all ring-4 ring-white"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D93848] border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D93848] border-2 border-white" />
      </a>
    </>
  );
}
