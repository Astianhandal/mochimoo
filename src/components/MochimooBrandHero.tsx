"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowDown, Leaf, Snowflake, ShieldCheck, Star } from "lucide-react";
import { getWhatsAppUrl } from "@/data/mochiData";

export default function MochimooBrandHero() {
  const shouldReduce = useReducedMotion();
  const [squishCount, setSquishCount] = useState(0);
  const [reacting, setReacting] = useState(false);

  const handleSquish = () => {
    if (reacting) return;
    setReacting(true);
    setSquishCount((c) => c + 1);
    setTimeout(() => setReacting(false), 600);
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-4 pb-28 md:pb-16 overflow-hidden">
      {/* Soft ambient bg blobs — not glassmorphism decoration, just ground warmth */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#FFE9EC] opacity-50 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#EEF5EC] opacity-40 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" aria-hidden />

      <div className="max-w-5xl mx-auto px-4 w-full flex-1 flex flex-col justify-center">
        {/* Status line — operational signal, not decoration */}
        <div className="flex items-center gap-2 mb-8">
          <span className="flex items-center gap-1.5 text-xs font-bold text-[#5B8C51] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#5B8C51] animate-pulse" />
            Batch Pagi · Siap Kirim Hari Ini
          </span>
          <span className="text-[#EBDDD4] text-xs">·</span>
          <span className="font-mono text-xs text-brand-muted tracking-widest">もちムー</span>
        </div>

        {/* Two-column on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">

          {/* Left: Typography-led editorial block */}
          <div className="enter-up" style={{ animationDelay: "0.05s" }}>
            {/* Main heading — no eyebrow kicker above it */}
            <h1 className="font-display font-semibold text-[2.6rem] leading-[1.08] tracking-tight text-brand-main sm:text-5xl md:text-[3.4rem]">
              Mochi<br />
              <span className="relative inline-block">
                paling{" "}
                <span className="relative">
                  kenyal
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 120 8" fill="none" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 6 Q30 1 60 5 Q90 9 118 3" stroke="#D93848" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                </span>{" "}
                di Cikarang.
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-brand-muted leading-relaxed prose-measure">
              Daifuku susu Hokkaido bertepung ketan tipis bantal, membungkus stroberi Lembang segar dan cokelat couverture Belgia yang meleleh seketika.
            </p>

            {/* Proof tags — compact, meaningful */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: <Star className="w-3.5 h-3.5" />, label: "Stroberi Lembang" },
                { icon: <Leaf className="w-3.5 h-3.5" />, label: "Matcha Uji Kyoto" },
                { icon: <Snowflake className="w-3.5 h-3.5" />, label: "Chilled Sameday" },
                { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "Halal MUI" },
              ].map((tag) => (
                <span key={tag.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#EBDDD4] text-xs font-semibold text-brand-main">
                  <span className="text-[#D93848]">{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Desktop-only inline CTA — mobile uses sticky bar */}
            <div className="hidden md:flex items-center gap-3 mt-10">
              <a
                href={getWhatsAppUrl("Halo mochimoo! Saya mau pesan daifuku hari ini.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#D93848] text-white font-bold text-base hover:bg-[#BF2A39] active:scale-95 transition-all shadow-lg shadow-[#D93848]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Pesan Sekarang
              </a>
              <a
                href="#bento-builder"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-[#EBDDD4] bg-white text-brand-main font-semibold text-base hover:bg-[#FCF8F5] active:scale-95 transition-all"
              >
                Rakit Box Hampers
              </a>
            </div>
          </div>

          {/* Right: Interactive mascot — the page's one authored focal moment */}
          <div className="flex flex-col items-center md:items-end enter-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              {/* Plate shadow under mascot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-5 rounded-full bg-[#EBDDD4]/60 blur-md" aria-hidden />

              {/* The mascot — tap/click to squish, one authored interaction */}
              <motion.button
                onClick={handleSquish}
                aria-label="Pencet mochi!"
                className="relative cursor-pointer select-none block"
                animate={
                  shouldReduce
                    ? {}
                    : reacting
                    ? { scaleX: [1, 1.25, 0.88, 1.08, 1], scaleY: [1, 0.75, 1.18, 0.95, 1], rotate: [0, -4, 4, -1, 0] }
                    : { y: [0, -8, 0], rotate: [-0.5, 0.5, -0.5] }
                }
                transition={
                  reacting
                    ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                    : { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
                }
              >
                <svg
                  width="240"
                  height="200"
                  viewBox="0 0 240 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  {/* Mochi body — pillowy dough form */}
                  <ellipse cx="120" cy="120" rx="88" ry="72" fill="#FFFFFF" stroke="#EBDDD4" strokeWidth="3" />

                  {/* Strawberry-cow spots (mochimoo signature) */}
                  <ellipse cx="66" cy="90" rx="22" ry="16" fill="#FFD6DD" opacity="0.75" transform="rotate(-15 66 90)" />
                  <ellipse cx="174" cy="130" rx="18" ry="13" fill="#FFD6DD" opacity="0.7" transform="rotate(10 174 130)" />

                  {/* Dusted kinako on top */}
                  <ellipse cx="120" cy="62" rx="30" ry="10" fill="#F5EAD6" opacity="0.6" />

                  {/* Kawaii ears */}
                  <path d="M44 70 Q34 50 52 48 Q62 55 44 70Z" fill="#FCF8F5" stroke="#EBDDD4" strokeWidth="2.5" />
                  <path d="M196 70 Q206 50 188 48 Q178 55 196 70Z" fill="#FCF8F5" stroke="#EBDDD4" strokeWidth="2.5" />

                  {/* Strawberry beret */}
                  <g transform="translate(93, 10) rotate(5)">
                    <path d="M27 6 C42 6 52 20 48 36 C44 52 30 60 27 60 C24 60 10 52 6 36 C2 20 12 6 27 6Z" fill="#D93848" />
                    <circle cx="20" cy="22" r="1.8" fill="#FFE0E5" />
                    <circle cx="34" cy="25" r="1.8" fill="#FFE0E5" />
                    <circle cx="27" cy="36" r="1.8" fill="#FFE0E5" />
                    <circle cx="19" cy="44" r="1.8" fill="#FFE0E5" />
                    <circle cx="32" cy="46" r="1.8" fill="#FFE0E5" />
                    <path d="M27 1 C29 7 37 8 40 9 C34 11 33 16 30 18 C28 13 22 14 18 11 C21 9 22 6 27 1Z" fill="#3E6B3E" />
                  </g>

                  {/* Face — changes when squished */}
                  {reacting ? (
                    <g stroke="#3B231A" strokeWidth="3" strokeLinecap="round">
                      {/* Squish UwU face */}
                      <path d="M88 110 Q96 103 88 96" />
                      <path d="M152 110 Q144 103 152 96" />
                    </g>
                  ) : (
                    <g>
                      <ellipse cx="90" cy="105" rx="7" ry="9" fill="#3B231A" />
                      <circle cx="93" cy="101" r="3" fill="white" />
                      <ellipse cx="150" cy="105" rx="7" ry="9" fill="#3B231A" />
                      <circle cx="153" cy="101" r="3" fill="white" />
                    </g>
                  )}

                  {/* Mouth */}
                  <path d="M110 118 Q120 128 130 118" stroke="#3B231A" strokeWidth="3" strokeLinecap="round" fill="none" />

                  {/* Blush */}
                  <ellipse cx="70" cy="120" rx="11" ry="6" fill="#FFAEC0" opacity="0.65" />
                  <ellipse cx="170" cy="120" rx="11" ry="6" fill="#FFAEC0" opacity="0.65" />
                </svg>
              </motion.button>

              {/* Squish counter — only shows after first tap */}
              {squishCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-center text-xs font-bold text-brand-muted"
                >
                  {squishCount === 1
                    ? "Kenyal kan? ( ≧ω≦ )"
                    : squishCount < 5
                    ? `${squishCount}× dipencet… mau coba nyicipin?`
                    : `${squishCount}× — semangat ya! ( >ω< )`}
                </motion.div>
              )}

              {/* Idle prompt — disappears after first tap */}
              {squishCount === 0 && (
                <div className="mt-2 text-center text-xs text-brand-muted font-semibold animate-pulse">
                  Pencet dulu ↑
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center pb-4 opacity-40 md:hidden" aria-hidden>
        <ArrowDown className="w-4 h-4 text-brand-muted animate-bounce" />
      </div>
    </section>
  );
}
