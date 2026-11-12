"use client";

// Infinite marquee tape — editorial divider between Hero and Menu
export default function MarqueeBanner() {
  const items = [
    "Ichigo Daifuku",
    "いちご大福",
    "Matcha Uji",
    "宇治抹茶",
    "Choco Melt",
    "生チョコ",
    "Lotus Biscoff",
    "ビスコフ",
    "Taro Velvet",
    "紫芋タロ",
  ];

  const full = [...items, ...items]; // doubled for seamless loop

  return (
    <div className="border-y border-[#EBDDD4] overflow-hidden py-3 bg-[#D93848]">
      <div className="marquee-track flex gap-6 items-center w-max">
        {full.map((item, i) => (
          <span key={i} className="text-white font-display font-semibold text-sm whitespace-nowrap flex items-center gap-6">
            {item}
            <span className="text-[#FFD6DD] opacity-70 text-xs">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
