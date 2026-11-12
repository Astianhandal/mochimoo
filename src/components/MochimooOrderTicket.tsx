"use client";

import React from "react";
import { MessageCircle, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/data/mochiData";

const STEPS = [
  {
    num: "1",
    title: "Pilih menu atau rakit bento box",
    desc: "Beli satuan mulai Rp 20.000 atau paket bento isi 6 & 12. Kalau mau hadiah, tuliskan pesan kartu ucapan gratis.",
    tags: [],
  },
  {
    num: "2",
    title: "Konfirmasi cepat via WhatsApp",
    desc: "Pesan sudah otomatis terisi. Admin konfirmasi total ongkir dan ketersediaan batch hari ini dalam hitungan menit.",
    tags: ["< 5 menit balas", "QRIS / Transfer"],
  },
  {
    num: "3",
    title: "Mochi tiba dingin & rapi",
    desc: "Dikemas dalam thermal pouch + ice gel pendingin. Mochi tiba kenyal, dingin, dan siap dinikmati atau dihadiahkan.",
    tags: ["Grab/Gojek Instant · Cikarang & Jabodetabek", "Paxel Cold Storage Sameday"],
  },
];

export default function MochimooOrderTicket() {
  return (
    <section id="alur-pesan" className="py-16 md:py-24 border-b border-[#EBDDD4] bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-main tracking-tight">
            Pesan Semudah Chat Teman
          </h2>
          <p className="mt-3 text-base text-brand-muted max-w-xl">
            Tanpa akun, tanpa aplikasi. Chat WhatsApp — mochi dingin datang ke pintu.
          </p>
        </div>

        {/* Order slip receipt style */}
        <div className="max-w-2xl bg-white rounded-2xl border border-[#EBDDD4] overflow-hidden shadow-sm">
          {/* Receipt header */}
          <div className="bg-[#FAF3EA] border-b border-dashed border-[#EBDDD4] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-mono text-xs font-bold text-brand-muted uppercase tracking-widest block">
                Order Slip · Dapur mochimoo Telaga Pasir Raya
              </span>
              <span className="font-display font-bold text-sm text-brand-main mt-0.5 block">
                Panduan Pemesanan
              </span>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded border border-[#5B8C51]/40 text-[#5B8C51] text-xs font-bold font-mono bg-[#EEF5EC] -rotate-1">
                COLD CHAIN OK
              </span>
              <span className="px-2 py-0.5 rounded border border-[#D93848]/30 text-[#D93848] text-xs font-bold font-mono bg-[#FFF0F2] rotate-1">
                FRESH DAILY
              </span>
            </div>
          </div>

          {/* Steps */}
          <div className="divide-y divide-[#EBDDD4]">
            {STEPS.map((s, i) => (
              <div key={i} className="px-6 py-5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FFF0F2] border border-[#D93848]/30 flex items-center justify-center font-display font-bold text-sm text-[#D93848] flex-shrink-0 mt-0.5">
                  {s.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base text-brand-main">{s.title}</h3>
                  <p className="mt-1 text-sm text-brand-muted leading-relaxed">{s.desc}</p>
                  {s.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-[#EEF5EC] text-[#5B8C51] text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Receipt footer tear-off CTA */}
          <div className="bg-[#FAF3EA] border-t border-dashed border-[#EBDDD4] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-brand-muted">Ada pertanyaan tentang pengiriman luar kota atau jam kirim khusus?</p>
            <a
              href={getWhatsAppUrl("Halo mochimoo! Mau tanya tentang pengiriman hari ini.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D93848] text-white text-xs font-bold hover:bg-[#BF2A39] active:scale-95 transition-all tap-target whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Chat CS Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
