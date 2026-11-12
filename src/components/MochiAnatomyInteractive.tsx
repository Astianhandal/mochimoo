"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, Info } from "lucide-react";

export default function MochiAnatomyInteractive() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: 0,
      title: "Kulit Ketan Tipis Kenyal",
      jp: "求肥 (Gyuhi Mochi)",
      color: "border-mochi-pink bg-surface-blush text-mochi-pink",
      description: "Tepung beras ketan jepang premium bertabur katakuriko halus. Ditarik perlahan hingga elastis, tipis, dan meleleh lembut di mulut saat digigit.",
      details: ["Tekstur: Chewy & Pillowy", "Ketebalan: Hanya 1.5 mm", "Taburan: Tepung Kentang Jepang"],
      highlightColor: "#F05365",
    },
    {
      id: 1,
      title: "Ganache Cokelat Lumer",
      jp: "生チョコ (Nama Choco)",
      color: "border-mochi-choco bg-[#FBF4EE] text-[#5C382A]",
      description: "Lapisan pasta couverture cokelat Belgia 70% dengan susu murni segar. Memberikan rasa gurih, pekat, dan manis yang menyelimuti buah dengan sempurna.",
      details: ["Bahan: Couverture 70%", "Karakter: Lumer Suhu Ruang", "Manis: Seimbang Tidak Enek"],
      highlightColor: "#5C382A",
    },
    {
      id: 2,
      title: "Stroberi Utuh Segar",
      jp: "完熟いちご (Fresh Strawberry)",
      color: "border-mochi-pink bg-surface-blush text-mochi-pink",
      description: "Buah stroberi segar utuh pilihan grade A yang dipetik dari perkebunan dataran tinggi. Renyah, berair, dan memancarkan aroma manis-asam yang menyegarkan.",
      details: ["Grade: Fresh Choice A", "Rasa: Manis-Asam Segar", "Kondisi: Utuh Tanpa Biji Keras"],
      highlightColor: "#F05365",
    },
  ];

  const current = layers[activeLayer];

  return (
    <div className="rounded-4xl bg-surface border-2 border-brand-border/80 p-5 sm:p-6 shadow-pillowy">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-mochi-pink animate-pulse" />
          <h4 className="font-display font-bold text-base text-brand-main">
            Eksplorasi Anatomi Daifuku
          </h4>
        </div>
        <span className="text-xs font-semibold text-brand-muted">
          Klik lapisan untuk melihat rahasia rasa 🔍
        </span>
      </div>

      {/* Layer selector tabs */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {layers.map((l, i) => (
          <button
            key={l.id}
            onClick={() => setActiveLayer(i)}
            className={`p-2 rounded-2xl text-xs font-bold transition-all text-center border relative ${
              activeLayer === i
                ? "bg-surface-warm border-brand-main text-brand-main shadow-sm"
                : "bg-surface-warm/40 border-brand-border/60 text-brand-muted hover:bg-surface-warm"
            }`}
          >
            {activeLayer === i && (
              <motion.div
                layoutId="activeLayerIndicator"
                className="absolute inset-0 border-2 border-mochi-pink rounded-2xl pointer-events-none"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="block truncate">{l.title.split(" ")[0]}</span>
            <span className="text-xs font-normal text-brand-muted/80">{l.jp.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Animated Layer Detail Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-3xl bg-surface-warm/60 border border-brand-border/60 text-left"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-bold text-brand-main block">{current.title}</span>
              <span className="text-xs font-medium text-brand-muted">{current.jp}</span>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-surface border border-brand-border/60 text-brand-main shadow-sm">
              Lapisan #{current.id + 1}
            </span>
          </div>

          <p className="text-xs text-brand-muted leading-relaxed mb-3">
            {current.description}
          </p>

          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-brand-border/50">
            {current.details.map((d, idx) => (
              <div key={idx} className="p-1.5 rounded-xl bg-surface/80 text-xs font-semibold text-brand-main text-center">
                {d}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
