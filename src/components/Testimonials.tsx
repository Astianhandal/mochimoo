"use client";

import React from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/mochiData";

const GALLERY = [
  { img: "/images/products/ichigo-daifuku.png", caption: "Unboxing Box of 6" },
  { img: "/images/products/kyoto-uji-matcha.png", caption: "Matcha Daifuku" },
  { img: "/images/products/double-belgian-choco-melt.png", caption: "Choco Melt lumer" },
  { img: "/images/products/taro-coconut-velvet.png", caption: "Taro Velvet Daifuku" },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-white border-b border-[#EBDDD4]">
      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-main tracking-tight">
            Kata mereka yang sudah coba
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            Lebih dari 10.000 boks dinikmati untuk momen ulang tahun, wisuda, kumpul keluarga, dan kafe.
          </p>
        </div>

        {/* Testimonials — 3 cards but with editorial variation not identical clone */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-[#EBDDD4] p-5 flex flex-col justify-between ${
                i === 1 ? "bg-[#FFF0F2] border-[#D93848]/20" : "bg-[#FDFBF7]"
              }`}
            >
              <div>
                <div className="flex gap-0.5 text-[#D93848] mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-brand-main leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#EBDDD4] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFF0F2] border border-[#D93848]/20 flex items-center justify-center font-display font-bold text-xs text-[#D93848] flex-shrink-0">
                  {t.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-display font-bold text-xs text-brand-main">{t.author}</div>
                  <div className="text-xs text-brand-muted">{t.location} · fav: {t.fav}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community gallery */}
        <div className="p-5 sm:p-7 rounded-2xl bg-[#F7EFE9] border border-[#EBDDD4]">
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <div>
              <h3 className="font-display font-bold text-base text-brand-main">@mochimoo.id Galeri Komunitas</h3>
              <p className="text-xs text-brand-muted mt-0.5">Tag kami saat unboxing untuk kesempatan di-feature</p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#D93848] hover:text-[#BF2A39]"
            >
              Instagram <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {GALLERY.map((g, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square group relative bg-[#EBDDD4]">
                <img
                  src={g.img}
                  alt={g.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-semibold line-clamp-2">{g.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
