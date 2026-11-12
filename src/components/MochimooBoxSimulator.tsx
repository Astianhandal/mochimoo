"use client";

import React, { useState } from "react";
import { X, RotateCcw, Gift, Check, Package, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { MOCHI_PRODUCTS, MochiProduct, HAMPERS_PACKAGES, getWhatsAppUrl } from "@/data/mochiData";

export default function MochimooBoxSimulator() {
  const [size, setSize] = useState<6 | 12>(6);
  const [slots, setSlots] = useState<MochiProduct[]>([]);
  const [greeting, setGreeting] = useState("");
  const [recipient, setRecipient] = useState("");

  const pkg = HAMPERS_PACKAGES.find((h) => h.capacity === size) || HAMPERS_PACKAGES[0];
  const isFull = slots.length >= size;

  const add = (p: MochiProduct) => {
    if (isFull) return;
    const next = [...slots, p];
    setSlots(next);
    if (next.length === size) {
      try { confetti({ particleCount: 50, spread: 65, origin: { y: 0.65 }, colors: ["#D93848", "#FFD6DD", "#5B8C51"] }); } catch {}
    }
  };

  const remove = (i: number) => {
    const s = [...slots]; s.splice(i, 1); setSlots(s);
  };

  const buildWa = () => {
    const counts: Record<string, { count: number; name: string }> = {};
    slots.forEach(p => { counts[p.id] = counts[p.id] || { count: 0, name: p.name }; counts[p.id].count++; });
    let t = `Halo mochimoo! Saya mau pesan ${pkg.name}:\n\n`;
    if (slots.length === 0) {
      t += `Isian: Chef mochimoo pilihkan kombinasi terfavorit\n`;
    } else {
      Object.values(counts).forEach((c, i) => { t += `${i + 1}. ${c.name} (${c.count} pcs)\n`; });
    }
    if (recipient) t += `\nPenerima: ${recipient}\n`;
    if (greeting) t += `Pesan kartu: "${greeting}"\n`;
    t += `\nTotal: Rp ${pkg.price.toLocaleString("id-ID")}\n`;
    t += `Mohon konfirmasi slot kirim hari ini. Terima kasih!`;
    return t;
  };

  return (
    <section id="bento-builder" className="py-16 md:py-24 border-b border-[#EBDDD4] bg-[#FCF8F5]">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-main tracking-tight">
            Rakit Bento Box Hampers
          </h2>
          <p className="mt-3 text-base text-brand-muted max-w-xl">
            Pilih box 6 atau 12, racik komposisi rasa sendiri. Sudah termasuk cooler pack sameday dan kartu ucapan gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Box simulator — 3 cols on lg */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-[#EBDDD4] p-5 sm:p-6">

            {/* Size toggle */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#EBDDD4]">
              <div className="flex gap-2 bg-[#FCF8F5] p-1 rounded-xl border border-[#EBDDD4]">
                {([6, 12] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => { setSize(s); if (slots.length > s) setSlots(slots.slice(0, s)); }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all tap-target ${
                      size === s ? "bg-[#D93848] text-white shadow-sm" : "text-brand-muted hover:text-brand-main"
                    }`}
                  >
                    Box {s} {s === 12 ? "· Best Value" : ""}
                  </button>
                ))}
              </div>
              {slots.length > 0 && (
                <button onClick={() => setSlots([])} className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-[#D93848] font-semibold tap-target">
                  <RotateCcw className="w-3.5 h-3.5" /> Kosongkan
                </button>
              )}
            </div>

            {/* Status */}
            <div className="flex items-center justify-between mb-3 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-brand-main">
                <Package className="w-3.5 h-3.5 text-[#D93848]" />
                Kompartemen ({slots.length}/{size})
              </span>
              <span className={isFull ? "text-[#5B8C51]" : "text-brand-muted"}>
                {isFull ? "Box penuh! Siap bungkus." : `Pilih ${size - slots.length} lagi`}
              </span>
            </div>

            {/* Bento tray */}
            <div className={`grid gap-2 p-4 rounded-2xl bg-[#F6EEE5] border-2 border-[#E3D3C4] ${
              size === 6 ? "grid-cols-3" : "grid-cols-4"
            }`}>
              {Array.from({ length: size }).map((_, i) => {
                const p = slots[i];
                return (
                  <div
                    key={i}
                    className={`relative aspect-square rounded-xl flex flex-col items-center justify-center p-2 text-center transition-all ${
                      p ? "bg-white border-2 border-[#D93848]/25 shadow-sm" : "border-2 border-dashed border-[#D6C4B4] bg-[#F1E6D8]/50"
                    }`}
                  >
                    {p ? (
                      <>
                        <button
                          onClick={() => remove(i)}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#D93848] text-white flex items-center justify-center shadow-sm hover:bg-[#BF2A39] z-10 tap-target"
                          aria-label="Hapus"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                        <div className="w-9 h-9 rounded-lg overflow-hidden shadow-sm mb-1">
                          <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-mono text-xs text-brand-muted leading-tight">{p.jpName}</span>
                      </>
                    ) : (
                      <span className="text-xs text-[#B09880]">#{i + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Flavor picker */}
            <div className="mt-5 pt-4 border-t border-[#EBDDD4]">
              <p className="text-xs font-bold text-brand-muted mb-3">Pilih Rasa:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MOCHI_PRODUCTS.map(p => {
                  const c = slots.filter(s => s.id === p.id).length;
                  return (
                    <button
                      key={p.id}
                      onClick={() => add(p)}
                      disabled={isFull}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all tap-target ${
                        isFull ? "opacity-40 cursor-not-allowed border-[#EBDDD4] bg-[#FCF8F5]"
                          : "bg-white border-[#EBDDD4] hover:border-[#D93848]/50 hover:bg-[#FFF0F2] active:scale-95"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-xs text-brand-main truncate">{p.name.split(" ")[0]}</div>
                        <div className="text-xs text-brand-muted">{c > 0 ? `${c}× di box` : "+ Tambah"}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Gift card + order summary — 2 cols on lg */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Greeting card */}
            <div className="bg-white rounded-2xl border border-[#EBDDD4] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-4 h-4 text-[#D93848]" />
                <span className="font-display font-bold text-sm text-brand-main">Kartu Ucapan Gratis</span>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Nama penerima (opsional)"
                  value={recipient}
                  onChange={e => setRecipient(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBDDD4] bg-[#FCF8F5] text-sm text-brand-main focus:outline-none focus:border-[#D93848] transition-colors"
                />
                <textarea
                  rows={3}
                  placeholder="Pesan di kartu: contoh Selamat ulang tahun! Semoga semanis mochi ini"
                  value={greeting}
                  onChange={e => setGreeting(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBDDD4] bg-[#FCF8F5] text-sm text-brand-main focus:outline-none focus:border-[#D93848] transition-colors resize-none"
                />
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-brand-muted">
                {["Box hardcover edisi khusus", "Thermal pouch + ice gel 12 jam", "Kartu ucapan dicetak rapi"].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#5B8C51] flex-shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="bg-[#FFF0F2] rounded-2xl border border-[#D93848]/25 p-5">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs font-bold text-brand-muted">Total Paket:</span>
                <span className="font-display font-bold text-2xl text-brand-main">
                  Rp {pkg.price.toLocaleString("id-ID")}
                </span>
              </div>
              <p className="text-xs text-brand-muted mb-5">
                {slots.length === 0 ? "Kombinasi terfavorit chef mochimoo." : `${slots.length} mochi siap dikemas.`}
              </p>

              <a
                href={getWhatsAppUrl(buildWa())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-[#D93848] text-white font-bold text-sm shadow-lg shadow-[#D93848]/25 hover:bg-[#BF2A39] active:scale-95 transition-all tap-target"
              >
                <MessageCircle className="w-5 h-5" />
                Pesan Custom Bento via WA
              </a>
              <p className="text-center text-xs text-brand-muted mt-3">Langsung ke tim dapur Cikarang Selatan</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
