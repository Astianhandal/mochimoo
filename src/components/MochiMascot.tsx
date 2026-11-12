"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function MochiMascot() {
  const [squishCount, setSquishCount] = useState<number>(0);
  const [mood, setMood] = useState<"happy" | "squished" | "superHappy">("happy");
  const controls = useAnimation();

  const handleSquish = async () => {
    setSquishCount((prev) => prev + 1);
    setMood("squished");

    // Squish and stretch spring animation
    await controls.start({
      scaleX: [1, 1.28, 0.88, 1.08, 1],
      scaleY: [1, 0.72, 1.15, 0.94, 1],
      rotate: [0, -4, 4, -2, 0],
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    });

    setMood("superHappy");
    setTimeout(() => setMood("happy"), 1200);
  };

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Speech bubble indicator */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="mb-3 px-3.5 py-1.5 rounded-full bg-surface border border-mochi-pink/30 shadow-md text-xs font-bold text-mochi-pink flex items-center gap-1.5 cursor-pointer"
        onClick={handleSquish}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>
          {mood === "squished"
            ? "Aduh kenyal banget! ( > ‿ < )"
            : mood === "superHappy"
            ? "Hehe harimu pasti manis! ✨"
            : "Pencet / senggol aku! 🍓"}
        </span>
      </motion.div>

      {/* Interactive Squishy SVG Mascot */}
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleSquish}
        className="cursor-pointer relative group"
        title="Klik untuk merasakan kelembutan mochimoo!"
      >
        <svg
          width="180"
          height="150"
          viewBox="0 0 180 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          {/* Soft Rice Flour Dusted Shadow */}
          <ellipse cx="90" cy="138" rx="65" ry="10" fill="#EBDDD4" opacity="0.6" />

          {/* Mochi Body: Hand-pinched pillowy organic silhouette */}
          <path
            d="M25 105C20 65 50 35 90 35C130 35 160 65 155 105C150 135 125 142 90 142C55 142 30 135 25 105Z"
            fill="url(#mochiGradient)"
            stroke="#F5DFD6"
            strokeWidth="3"
          />

          {/* Kawaii Strawberry Beret / Hat */}
          <g transform="translate(68, 12) rotate(8)">
            {/* Strawberry Fruit Body */}
            <path
              d="M22 6C34 6 42 16 38 30C34 44 24 50 22 50C20 50 10 44 6 30C2 16 10 6 22 6Z"
              fill="#F05365"
            />
            {/* Strawberry Seeds */}
            <circle cx="16" cy="20" r="1.5" fill="#FFE0E5" />
            <circle cx="28" cy="22" r="1.5" fill="#FFE0E5" />
            <circle cx="22" cy="30" r="1.5" fill="#FFE0E5" />
            <circle cx="15" cy="36" r="1.5" fill="#FFE0E5" />
            <circle cx="26" cy="38" r="1.5" fill="#FFE0E5" />
            {/* Green Calyx Leaf */}
            <path
              d="M22 2C24 6 30 7 32 8C27 9 26 13 24 15C22 12 18 13 14 10C17 9 18 6 22 2Z"
              fill="#5B8C51"
            />
          </g>

          {/* Kawaii Facial Expressions */}
          {mood === "squished" ? (
            /* Winking / Squinting Happy Eyes */
            <g stroke="#3B231A" strokeWidth="3" strokeLinecap="round">
              <path d="M58 88L68 84L58 80" />
              <path d="M122 88L112 84L122 80" />
            </g>
          ) : (
            /* Big Sparkling Anime Eyes */
            <g fill="#3B231A">
              <ellipse cx="62" cy="85" rx="6" ry="8" />
              <circle cx="64" cy="82" r="2.5" fill="white" />
              <ellipse cx="118" cy="85" rx="6" ry="8" />
              <circle cx="120" cy="82" r="2.5" fill="white" />
            </g>
          )}

          {/* Sweet Smiling Mouth */}
          <path
            d={mood === "superHappy" ? "M82 92Q90 106 98 92" : "M84 92Q90 100 96 92"}
            stroke="#3B231A"
            strokeWidth="3"
            strokeLinecap="round"
            fill={mood === "superHappy" ? "#F05365" : "none"}
          />

          {/* Soft Blushing Cheeks */}
          <ellipse cx="48" cy="94" rx="8" ry="5" fill="#FFAEC0" opacity="0.65" />
          <ellipse cx="132" cy="94" rx="8" ry="5" fill="#FFAEC0" opacity="0.65" />

          {/* Dusted Powder Glow Gradient */}
          <defs>
            <linearGradient id="mochiGradient" x1="90" y1="35" x2="90" y2="142" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.75" stopColor="#FFF9F5" />
              <stop offset="1" stopColor="#FDEEE6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Heart reaction upon squish */}
        {mood === "superHappy" && (
          <motion.div
            initial={{ scale: 0, y: 0, opacity: 1 }}
            animate={{ scale: 1.4, y: -40, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-4 text-mochi-pink"
          >
            <Heart className="w-6 h-6 fill-current" />
          </motion.div>
        )}
      </motion.div>

      {/* Squish Counter Badge */}
      <div className="mt-2 text-xs font-semibold text-brand-muted/80">
        Telah dipencet <span className="font-bold text-mochi-pink">{squishCount}</span> kali •{" "}
        <span className="text-mochi-matcha font-bold">100% Lembut Bantal</span>
      </div>
    </div>
  );
}
