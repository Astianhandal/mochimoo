"use client";

import React from "react";
import { MessageCircle, Instagram, MapPin, Clock, Truck } from "lucide-react";
import { STORE_INFO, WHATSAPP_DISPLAY, getWhatsAppUrl } from "@/data/mochiData";

export default function Footer() {
  return (
    <footer className="bg-[#FDFBF7] border-t border-[#EBDDD4] pt-12 pb-32 md:pb-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#EBDDD4]">

          {/* Brand */}
          <div>
            <div className="font-display font-semibold text-2xl text-brand-main tracking-tight mb-2">
              mochi<span className="text-[#D93848]">moo</span>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed max-w-xs">
              Mochi lembut khas Jepang, dibuat segar setiap pagi dengan isian buah segar dan cokelat couverture premium.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="px-2.5 py-1 rounded-full bg-[#EEF5EC] text-[#5B8C51] text-xs font-bold border border-[#5B8C51]/20">100% Halal</span>
              <span className="px-2.5 py-1 rounded-full bg-[#FCF8F5] text-brand-muted text-xs font-bold border border-[#EBDDD4]">P-IRT Terdaftar</span>
            </div>
          </div>

          {/* Kitchen */}
          <div>
            <h4 className="font-display font-bold text-sm text-brand-main mb-3 uppercase tracking-wider">Dapur & Pengiriman</h4>
            <div className="space-y-2.5 text-xs text-brand-muted">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D93848] flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#5B8C51] flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.delivery}</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-brand-main mb-3 uppercase tracking-wider">Kontak</h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl("Halo mochimoo!")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-[#D93848] hover:text-[#BF2A39] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {WHATSAPP_DISPLAY}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-brand-muted hover:text-brand-main transition-colors"
              >
                <Instagram className="w-4 h-4" />
                {STORE_INFO.instagram}
              </a>
            </div>
          </div>

        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-muted">
          <span>© {new Date().getFullYear()} mochimoo Confectionery. Handcrafted Daily.</span>
          <div className="flex gap-5">
            <a href="#menu" className="hover:text-brand-main transition-colors">Menu</a>
            <a href="#bento-builder" className="hover:text-brand-main transition-colors">Hampers</a>
            <a href="#reseller" className="hover:text-brand-main transition-colors">Grosir</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
