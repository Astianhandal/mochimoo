"use client";

import React, { useState } from "react";
import { MessageCircle, Shuffle } from "lucide-react";
import confetti from "canvas-confetti";
import { MOCHI_PRODUCTS, MochiProduct, getWhatsAppUrl } from "@/data/mochiData";

const CATS = [
  { id: "all", label: "Semua" },
  { id: "fruit", label: "Buah Segar" },
  { id: "tea", label: "Artisan Tea" },
  { id: "choco", label: "Belgian Choco" },
  { id: "sweet", label: "Sweet & Crunch" },
];

export default function MochimooBentoMenu() {
  const [cat, setCat] = useState("all");
  const [spinning, setSpinning] = useState(false);
  const [pick, setPick] = useState<MochiProduct | null>(null);

  const filtered = cat === "all" ? MOCHI_PRODUCTS : MOCHI_PRODUCTS.filter((p) => p.category === cat);

  const handleRoulette = () => {
    if (spinning) return;
    setSpinning(true);
    setPick(null);
    let n = 0;
    const id = setInterval(() => {
      setPick(MOCHI_PRODUCTS[Math.floor(Math.random() * MOCHI_PRODUCTS.length)]);
      n++;
      if (n > 14) {
        clearInterval(id);
        const final = MOCHI_PRODUCTS[Math.floor(Math.random() * MOCHI_PRODUCTS.length)];
        setPick(final);
        setSpinning(false);
        try { confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 }, colors: ["#D93848", "#FFD6DD", "#5B8C51"] }); } catch {}
      }
    }, 85);
  };

  return (
    <section id="menu" className="py-16 md:py-24 border-b border-[#EBDDD4] bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-main tracking-tight leading-tight">
            Koleksi Rasa Daifuku Segar
          </h2>
          <p className="mt-3 text-base text-brand-muted max-w-xl">
            Dibuat setiap pagi tanpa pengawet. Setiap gigitan: kulit kenyal susu, isian segar, dan kejutan di tengahnya.
          </p>

          {/* Roulette button — meaningful interaction, not decoration */}
          <button
            onClick={handleRoulette}
            disabled={spinning}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#EBDDD4] text-sm font-semibold text-brand-main hover:border-[#D93848] hover:text-[#D93848] active:scale-95 transition-all tap-target"
          >
            <Shuffle className={`w-4 h-4 ${spinning ? "animate-spin" : ""}`} />
            {spinning ? "Memilih rasa…" : "Acak Rekomendasi Rasa"}
          </button>

          {/* Pick result */}
          {pick && !spinning && (
            <div className="mt-3 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#FFF0F2] border border-[#D93848]/30 text-sm">
              <span className="font-mono text-[#D93848] font-bold">{pick.jpName}</span>
              <span className="text-brand-main font-semibold">{pick.name}</span>
              <a
                href={getWhatsAppUrl(`Halo mochimoo! Saya mau coba ${pick.name} hasil rekomendasi roulette.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-bold text-white bg-[#D93848] px-3 py-1.5 rounded-lg tap-target"
              >
                Pesan
              </a>
            </div>
          )}
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mb-8">
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all tap-target ${
                cat === c.id
                  ? "bg-brand-main text-white"
                  : "bg-white border border-[#EBDDD4] text-brand-muted hover:text-brand-main"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Product list — editorial tasting format, NOT identical card rut */}
        <div className="space-y-4">
          {filtered.map((product, idx) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-[#EBDDD4] overflow-hidden flex flex-row gap-0 hover:border-[#D93848]/40 transition-colors"
            >
              {/* Image strip — natural proportion, not circle mask */}
              <div className="w-28 sm:w-36 flex-shrink-0 relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={idx < 3 ? "eager" : "lazy"}
                />
                {/* Kanji badge */}
                <span className="absolute top-2 left-2 font-mono text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  {product.jpName}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-base text-brand-main leading-tight truncate">
                        {product.name}
                      </h3>
                      <span className="text-xs text-brand-muted">{product.badge}</span>
                    </div>
                    <span className="font-display font-bold text-base text-[#D93848] flex-shrink-0">
                      Rp {(product.price / 1000).toFixed(0)}K
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-brand-muted leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Flavor bars — 2 tactile indicators, not label widgets */}
                  <div className="mt-3 flex gap-4">
                    <div className="flex flex-col gap-1 flex-1">
                      <span className="text-xs text-brand-muted">Manis</span>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(d => (
                          <div key={d} className={`h-1 flex-1 rounded-full ${d <= product.sweetness ? "bg-[#D93848]" : "bg-[#EBDDD4]"}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <span className="text-xs text-brand-muted">Kenyal</span>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(d => (
                          <div key={d} className={`h-1 flex-1 rounded-full ${d <= product.chewiness ? "bg-[#5B8C51]" : "bg-[#EBDDD4]"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions row */}
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <a
                    href={getWhatsAppUrl(`Halo mochimoo! Saya mau pesan 2 pcs ${product.name}. Ready stok hari ini?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#D93848] text-white text-xs font-bold active:scale-95 transition-all tap-target"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Pesan Satuan
                  </a>
                  <a
                    href="#bento-builder"
                    className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl border border-[#EBDDD4] bg-[#FCF8F5] text-brand-main text-xs font-bold active:scale-95 transition-all tap-target"
                  >
                    + Box
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
