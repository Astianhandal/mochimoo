export const WHATSAPP_NUMBER = "6281586618283";
export const WHATSAPP_DISPLAY = "+62 815-8661-8283";

export function getWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export interface MochiProduct {
  id: string;
  name: string;
  jpName: string;
  category: "fruit" | "tea" | "choco" | "sweet";
  price: number;
  badge: string;
  description: string;
  sweetness: number; // 1-5
  chewiness: number; // 1-5
  ingredients: string[];
  accentColor: string;
  bgLight: string;
  imageUrl: string;
}

export const MOCHI_PRODUCTS: MochiProduct[] = [
  {
    id: "ichigo-daifuku",
    name: "Ichigo Daifuku Strawberry",
    jpName: "いちご大福",
    category: "fruit",
    price: 22000,
    badge: "Signature #1",
    description: "Buah stroberi segar utuh manis-asam dibalut pasta cokelat lembut dan kulit mochi susu kenyal bertabur tepung ketan halus.",
    sweetness: 3,
    chewiness: 5,
    ingredients: ["Stroberi Lembang Utuh", "Belgian Chocolate", "Mochi Susu Hokkaido"],
    accentColor: "#E84855",
    bgLight: "#FFF0F2",
    imageUrl: "/images/products/ichigo-daifuku.png",
  },
  {
    id: "matcha-ganache",
    name: "Kyoto Uji Matcha",
    jpName: "宇治抹茶",
    category: "tea",
    price: 24000,
    badge: "Artisan Tea",
    description: "Matcha grade ceremonial asli Uji Kyoto dengan rasa pahit-manis yang kaya, berpadu lembut dengan ganache cokelat putih.",
    sweetness: 2,
    chewiness: 5,
    ingredients: ["Matcha Uji Kyoto Grade A", "White Chocolate Ganache", "Ketan Murni"],
    accentColor: "#3E6B3E",
    bgLight: "#F0F7EE",
    imageUrl: "/images/products/kyoto-uji-matcha.png",
  },
  {
    id: "double-choco-melt",
    name: "Double Belgian Choco Melt",
    jpName: "生チョコ",
    category: "choco",
    price: 20000,
    badge: "Choco Meltdown",
    description: "Couverture cokelat hitam 70% yang meleleh lumer seketika di suhu mulut, dengan taburan bubuk kakao pekat di atasnya.",
    sweetness: 3,
    chewiness: 4,
    ingredients: ["Belgian Couverture 70%", "Dark Choco Cream", "Kakao Belanda"],
    accentColor: "#543325",
    bgLight: "#F8F1EA",
    imageUrl: "/images/products/double-belgian-choco-melt.png",
  },
  {
    id: "biscoff-crunch",
    name: "Lotus Biscoff Caramel",
    jpName: "ビスコフ",
    category: "sweet",
    price: 23000,
    badge: "Crunchy Spiced",
    description: "Krim karamel rempah khas speculoos dengan isian selai lumer dan butiran renyah biskuit Lotus Biscoff otentik.",
    sweetness: 4,
    chewiness: 4,
    ingredients: ["Lotus Biscoff Spread", "Caramelized Crumble", "Custard Susu"],
    accentColor: "#8D4925",
    bgLight: "#FAF3EB",
    imageUrl: "/images/products/lotus-biscoff-caramel.png",
  },
  {
    id: "taro-velvet",
    name: "Taro Coconut Velvet",
    jpName: "紫芋タロ",
    category: "sweet",
    price: 21000,
    badge: "Floral Cream",
    description: "Pasta talas ungu panggang alami dengan semerbak aroma kelapa muda dan tekstur krim velvet yang menenangkan.",
    sweetness: 3,
    chewiness: 5,
    ingredients: ["Ubi Ungu Alami", "Santan Kelapa Muda", "Velvet Buttercream"],
    accentColor: "#754C94",
    bgLight: "#F7F2FA",
    imageUrl: "/images/products/taro-coconut-velvet.png",
  },
];

export interface HampersPackage {
  id: string;
  name: string;
  subname: string;
  capacity: number;
  price: number;
  originalPrice: number;
  boxColor: string;
  sleeveTag: string;
  features: string[];
}

export const HAMPERS_PACKAGES: HampersPackage[] = [
  {
    id: "box-6",
    name: "Happiness Bento Box",
    subname: "Isi 6 Butir Bebas Pilih",
    capacity: 6,
    price: 125000,
    originalPrice: 135000,
    boxColor: "#FFF0F2",
    sleeveTag: "Best for Gifting & Couple",
    features: [
      "Bebas tentukan 6 varian rasa mochi",
      "Hardbox motif pastel mochimoo",
      "Pita satin & hangtag pesan kustom",
      "Ice-pack pendingin pengiriman aman",
    ],
  },
  {
    id: "box-12",
    name: "Deluxe Party Bento Box",
    subname: "Isi 12 Butir Bebas Pilih",
    capacity: 12,
    price: 235000,
    originalPrice: 265000,
    boxColor: "#F0F7EE",
    sleeveTag: "Party & Corporate Hampers",
    features: [
      "Bebas tentukan 12 varian rasa mochi",
      "Bento box bertingkat edisi premium",
      "Tas spunbond eksklusif mochimoo",
      "Free custom calligraphy greeting card",
      "Double ice-pack pendingin 6 jam",
    ],
  },
];

export const RESELLER_TIERS = [
  {
    minQty: 50,
    pricePerPcs: 15500,
    retailPrice: 22000,
    marginPercent: "30%",
    profitEst: "Rp 325.000 / batch",
    suitableFor: "Reseller Pemula & Acara Arisan",
  },
  {
    minQty: 100,
    pricePerPcs: 14000,
    retailPrice: 22000,
    marginPercent: "36%",
    profitEst: "Rp 800.000 / batch",
    suitableFor: "Coffee Shop & Pastry Display",
  },
  {
    minQty: 250,
    pricePerPcs: 12500,
    retailPrice: 22000,
    marginPercent: "43%",
    profitEst: "Rp 2.375.000 / batch",
    suitableFor: "Katering Pernikahan & Mitra Kafe Besar",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Tekstur kenyal mochinya beneran beda dari yang lain, lembut banget gak alot! Strawberry-nya gede dan manis berair.",
    author: "Nadia S.",
    location: "Cikarang Selatan",
    fav: "Ichigo Daifuku",
    date: "Kemarin",
  },
  {
    quote: "Kirim hampers Box of 12 buat ulang tahun pacar, packaging pita satinnya mewah banget. Sampe tujuan tetap dingin aman.",
    author: "Dimas A.",
    location: "Tangerang",
    fav: "Matcha Ganache & Choco Melt",
    date: "2 hari lalu",
  },
  {
    quote: "Kita pajang mochimoo di chiller kafe, pelanggan suka banget! Konsisten enak tiap kirim pagi.",
    author: "Kintan (Owner Coffee Shop)",
    location: "Depok",
    fav: "Lotus Biscoff & Taro",
    date: "Minggu lalu",
  },
];

export const STORE_INFO = {
  address: "Perumahan Telaga Pasir Raya, Cikarang Selatan, Bekasi",
  hours: "Setiap Hari (Senin - Minggu): 08.00 - 20.00 WIB",
  delivery: "Gosend & Grab Express Instant / Sameday Area Cikarang & Jabodetabek",
  instagram: "@mochimoo.id",
  whatsapp: WHATSAPP_DISPLAY,
};
