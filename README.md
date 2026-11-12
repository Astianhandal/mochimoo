# 🍓 mochimoo — Artisan Daifuku Mochi Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Website katalog, simulasi hampers, dan pemesanan instan modern berbasis **Next.js (App Router)** untuk brand kuliner **mochimoo** (Artisan Daifuku Mochi). Didesain dengan pendekatan *mobile-first*, menolak template generik AI, dan menerapkan standar visual **Atelier Wagashi Kontemporer** yang taktil, interaktif, dan ramah pengguna.

---

## 👤 Informasi Mahasiswa

- **Nama**: Astian Handal Cahya Putra
- **NIM**: 312310527
- **Fokus Proyek**: Front-End Web Development & Interactive Product Ordering

---

## 📌 Profil Brand & Usaha

- **Nama Brand**: **mochimoo** (もちムー)
- **Tagline**: *"Mochi lembut, bikin harimu manis."*
- **Lokasi Dapur & Toko**: Perumahan Telaga Pasir Raya, Cikarang Selatan, Bekasi
- **Kontak Pemesanan (WhatsApp Official)**: `+62 815-8661-8283`
- **Layanan Pengiriman**: Instant & Sameday via GoSend, GrabExpress, dan Paxel Cold Storage

---

## ✨ Fitur-Fitur Utama

### 1. 🐮 Interactive Mascot Hero (*Squish-O-Meter*)
- Maskot sapi mochi stroberi khas mochimoo yang dapat diklik/ditekan langsung di layar.
- Menggunakan kalkulasi fisika kelenturan adonan bantal (*squash-and-stretch*) via Framer Motion.
- Menampilkan counter interaktif tingkat keempukan serta status kesiapan batch dapur pagi secara *live*.

### 2. 🍓 Koleksi Menu Tasting Mochi & Flavour Roulette
- 100% varian mochi daifuku segar (*Ichigo Daifuku, Double Belgian Choco Melt, Kyoto Uji Matcha, Lotus Biscoff Caramel, Taro Coconut Velvet*).
- Indikator taktil batang **Kemanisan** dan **Kekenyalan** per varian rasa.
- Fitur interaktif **"Acak Rekomendasi Rasa"** (*Roulette*) dengan ledakan efek konfeti untuk membantu pembeli memilih varian mood hari ini.

### 3. 🍱 Simulator Kemasan Bento Box (Isi 6 & 12)
- Tampilan visual kompartemen bento fisik; pengguna dapat memilih varian rasa yang langsung mengisi slot wadah secara *real-time*.
- Formulir personalisasi **Kartu Ucapan Gratis** (nama penerima dan pesan ucapan).
- Generator format WhatsApp otomatis yang merangkum rincian isi bento, kartu ucapan, dan total harga secara presisi.

### 4. 💼 Trade Ledger Grosir & Reseller B2B
- Kalkulator simulasi margin laba mitra (pilihan kuantiti: 50, 100, 250 pcs).
- Informasi rincian harga modal, saran harga jual (HET), dan fasilitas suplai kafe/souvenir pernikahan (display case akrilik, gratis ongkir rantai dingin).

### 5. 🧾 Struk Tiket Pesanan (*Order Slip Flow*)
- Mengusung estetika struk pesanan kafe Jepang dengan batas sobekan perforasi dan stempel resmi *Cold Chain Verified*.
- Menjelaskan 3 langkah mudah memesan mochi langsung ke WhatsApp tanpa perlu repot registrasi akun.

### 6. 📱 Mobile-First Sticky Bar & Responsif Jaringan Lokal
- Bilah tombol pemesanan WhatsApp melayang yang selalu berada dalam jangkauan ibu jari (*thumb-zone*) pada layar *smartphone*.
- Konfigurasi host `0.0.0.0` sehingga website dapat diuji dan dibuka langsung dari smartphone pada jaringan Wi-Fi lokal yang sama.

---

## 🛠️ Tech Stack & Dependensi

| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | Next.js 14 (React 18, App Router) |
| **Bahasa Pemrograman** | TypeScript |
| **Styling** | Tailwind CSS + Custom Kinako Paper Ground Texture |
| **Animasi & Interaksi** | Framer Motion, Canvas Confetti |
| **Ikonografi** | Lucide React |
| **Tipografi** | Google Fonts (`Fredoka` untuk Display, `Plus Jakarta Sans` untuk Body) |

---

## 📂 Struktur Direktori Proyek

```text
mochi/
├── public/
│   ├── images/
│   │   └── products/          # File foto produk lokal resolusi tinggi ([namaproduk].png)
│   └── products/              # Alias direktori asset produk
├── src/
│   ├── app/
│   │   ├── globals.css        # Konfigurasi Tailwind, scrollbar tema, dan browser surfaces
│   │   ├── layout.tsx         # Root layout & setup Google Fonts
│   │   └── page.tsx           # Halaman utama (Single-page application)
│   ├── components/
│   │   ├── FloatingWhatsApp.tsx    # Mobile-first sticky order bar & floating action button
│   │   ├── Footer.tsx              # Informasi toko, jam operasional, dan lokasi dapur
│   │   ├── Header.tsx              # Navigasi sticky, wordmark kanji, dan drawer mobile
│   │   ├── MarqueeBanner.tsx       # Running text divider khas wagashi atelier
│   │   ├── MochimooBentoMenu.tsx   # Menu katalog tasting & interaksi roulette rasa
│   │   ├── MochimooBoxSimulator.tsx# Simulator fisik bento box 6 & 12 + kartu ucapan
│   │   ├── MochimooBrandHero.tsx   # Maskot interaktif squishy & hero typography
│   │   ├── MochimooOrderTicket.tsx # Tiket struk kasir panduan alur pesan
│   │   └── MochimooWholesale.tsx   # Kalkulator margin mitra grosir & reseller
│   └── data/
│       └── mochiData.ts       # Database statis produk, paket hampers, dan WhatsApp generator
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Panduan Menjalankan Proyek

### 1. Prasyarat Sistem
- **Node.js**: Versi `18.17.0` atau yang lebih baru
- **NPM**: Versi `9.0.0` atau yang lebih baru

### 2. Instalasi Dependensi
Clone repository atau buka direktori proyek, lalu jalankan:
```bash
npm install
```

### 3. Menjalankan Server Development
Untuk menjalankan server lokal dengan dukungan akses antar-perangkat 1 jaringan:
```bash
npm run dev
```
Setelah berjalan:
- **Akses dari Komputer (Local)**: Buka [`http://localhost:3000`](http://localhost:3000)
- **Akses dari HP / Perangkat Lain (1 Jaringan Wi-Fi)**: Buka `http://[IP-KOMPUTER]:3000` (contoh: `http://192.168.1.2:3000`)

### 4. Build untuk Production
Untuk membuat build produksi yang dioptimalkan:
```bash
npm run build
npm start
```

---

## 📸 Panduan Mengganti Foto Produk

Foto produk dikelola secara lokal pada direktori:
```text
public/images/products/
```
Nama file terstandarisasi dengan format:
- `ichigo-daifuku.png` — Ichigo Daifuku Strawberry
- `double-belgian-choco-melt.png` — Double Belgian Choco Melt
- `kyoto-uji-matcha.png` — Kyoto Uji Matcha
- `lotus-biscoff-caramel.png` — Lotus Biscoff Caramel
- `taro-coconut-velvet.png` — Taro Coconut Velvet

Cukup timpa file gambar di atas dengan foto baru berformat `.png` atau `.jpg` yang bersesuaian, dan tampilan web akan otomatis terupdate.

---

## 📄 Lisensi & Hak Cipta

Dibuat untuk keperluan akademik dan pengembangan brand **mochimoo**.  
Hak Cipta © 2026 **Astian Handal Cahya Putra** (NIM: 312310527). All rights reserved.

