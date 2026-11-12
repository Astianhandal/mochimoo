"use client";

import React, { useState } from "react";
import { MessageCircle, Check, Building2 } from "lucide-react";
import { getWhatsAppUrl } from "@/data/mochiData";

const TIERS = [
  { qty: 50,  unitPrice: 16000, badge: "Starter", bonus: ["Individual sealing", "Sameday delivery support", "Katalog foto HD"] },
  { qty: 100, unitPrice: 14500, badge: "Reguler · Coffee Shop", bonus: ["Brosur & banner meja", "Ice gel tambahan", "Prioritas slot batch pagi"] },
  { qty: 250, unitPrice: 13000, badge: "Master · Wedding & Event", bonus: ["Free akrilik display case", "Free ongkir cold chain Jabodetabek", "Custom stiker brand/event"] },
];
const RETAIL = 22000;

export default function MochimooWholesale() {
  const [tier, setTier] = useState(TIERS[1]);

  const profit = (RETAIL - tier.unitPrice) * tier.qty;
  const cost = tier.unitPrice * tier.qty;
  const margin = Math.round(((RETAIL - tier.unitPrice) / RETAIL) * 100);

  const waText =
    `Halo tim B2B mochimoo! Saya tertarik mitra/pesan grosir:\n\n` +
    `- Estimasi kebutuhan: ${tier.qty} pcs\n` +
    `- Paket: ${tier.badge}\n` +
    `- Estimasi modal: Rp ${cost.toLocaleString("id-ID")}\n\n` +
    `Bisa dibantu info ketersediaan dan tester? Terima kasih!`;

  return (
    <section id="reseller" className="py-16 md:py-24 border-b border-[#EBDDD4] bg-[#FFF8F8]">
      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-main tracking-tight">
            Grosir, Reseller &amp; Katering Acara
          </h2>
          <p className="mt-3 text-base text-brand-muted max-w-xl">
            Harga modal khusus untuk kafe, coffee shop, suvenir pernikahan, atau hampers korporat dengan margin hingga 40%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">

          {/* Tier selector — left 3 cols */}
          <div className="md:col-span-3 space-y-3">
            {TIERS.map((t) => (
              <button
                key={t.qty}
                onClick={() => setTier(t)}
                className={`w-full text-left rounded-2xl border p-4 sm:p-5 transition-all tap-target ${
                  tier.qty === t.qty
                    ? "border-[#D93848] bg-[#FFF0F2] shadow-sm"
                    : "border-[#EBDDD4] bg-white hover:border-[#D93848]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-bold text-base text-brand-main">{t.qty} pcs</span>
                  <span className="text-xs font-bold text-brand-muted bg-[#FCF8F5] border border-[#EBDDD4] px-2.5 py-0.5 rounded-full">{t.badge}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-xl text-[#D93848]">
                    Rp {t.unitPrice.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xs text-brand-muted">/ pcs</span>
                  <span className="ml-auto text-xs font-bold text-[#5B8C51]">
                    Hemat Rp {(RETAIL - t.unitPrice).toLocaleString("id-ID")}/pcs
                  </span>
                </div>
                {tier.qty === t.qty && (
                  <div className="mt-3 pt-3 border-t border-[#EBDDD4] grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {t.bonus.map((b) => (
                      <div key={b} className="flex items-start gap-1.5 text-xs text-brand-muted">
                        <Check className="w-3 h-3 text-[#5B8C51] mt-0.5 flex-shrink-0" /> {b}
                      </div>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Summary card — right 2 cols */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-[#EBDDD4] p-5 sm:p-6 sticky top-20">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-[#D93848]" />
              <span className="font-display font-bold text-sm text-brand-main">Simulasi Profit Mitra</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>Volume pesanan</span>
                <span className="font-bold text-brand-main">{tier.qty} pcs</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Harga modal / pcs</span>
                <span className="font-bold text-brand-main">Rp {tier.unitPrice.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>Saran harga jual</span>
                <span className="font-bold text-brand-main">Rp {RETAIL.toLocaleString("id-ID")}</span>
              </div>
              <div className="pt-3 border-t border-[#EBDDD4] flex justify-between">
                <span className="font-bold text-brand-muted">Modal total</span>
                <span className="font-display font-bold text-brand-main text-base">Rp {cost.toLocaleString("id-ID")}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#EEF5EC] border border-[#5B8C51]/20">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-[#5B8C51]">Potensi untung</span>
                  <span className="font-display font-bold text-lg text-[#5B8C51]">Rp {profit.toLocaleString("id-ID")}</span>
                </div>
                <div className="text-xs text-[#5B8C51] mt-0.5">Margin ~{margin}%</div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-[#D93848] text-white font-bold text-sm shadow-lg shadow-[#D93848]/25 hover:bg-[#BF2A39] active:scale-95 transition-all tap-target"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi &amp; Minta Tester
            </a>
            <p className="text-center text-xs text-brand-muted mt-2">Tester untuk coffee shop &amp; wedding organizer</p>
          </div>

        </div>
      </div>
    </section>
  );
}
