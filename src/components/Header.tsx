"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/data/mochiData";

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "Hampers", href: "#bento-builder" },
  { label: "Grosir", href: "#reseller" },
  { label: "Ulasan", href: "#testimoni" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FCF8F5]/95 backdrop-blur-md border-b border-[#EBDDD4]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Wordmark */}
          <a href="#" className="flex items-baseline gap-1.5 group">
            <span className="font-display font-semibold text-2xl text-brand-main tracking-tight">
              mochi<span className="text-[#D93848]">moo</span>
            </span>
            <span className="font-mono text-xs text-brand-muted opacity-70 hidden sm:inline">
              もち
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-brand-muted hover:text-[#D93848] transition-colors py-2"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Kitchen status pill */}
            <span className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#5B8C51] bg-[#EEF5EC] px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B8C51] animate-pulse" />
              Dapur Buka
            </span>

            {/* Desktop CTA */}
            <a
              href={getWhatsAppUrl("Halo mochimoo! Mau tanya-tanya menu mochi hari ini.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D93848] text-white font-semibold text-sm hover:bg-[#BF2A39] active:scale-95 transition-all tap-target"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WA</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2.5 rounded-xl border border-[#EBDDD4] text-brand-main hover:bg-[#F7EFE9] transition-colors tap-target"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen nav drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#FCF8F5]/98 backdrop-blur-sm flex flex-col pt-20 pb-safe md:hidden">
          <nav className="flex flex-col px-6 gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display font-semibold text-3xl text-brand-main py-4 border-b border-[#EBDDD4] hover:text-[#D93848] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto px-6 pb-10">
            <a
              href={getWhatsAppUrl("Halo mochimoo! Mau pesan mochi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#D93848] text-white font-bold text-base shadow-lg tap-target"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pesan via WhatsApp</span>
            </a>
            <p className="text-center text-xs text-brand-muted mt-3">{WHATSAPP_DISPLAY}</p>
          </div>
        </div>
      )}
    </>
  );
}
