"use client";

import Image from "next/image";

export default function HeroSlideshow() {
  return (
    <section className="relative w-full h-screen bg-black">

      <div className="flex w-full h-full">

        <div className="relative w-1/3 h-full">
          <Image
            src="/photo/25.webp"
            alt="Wedding 1"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative w-1/3 h-full">
          <Image
            src="/photo/26.webp"
            alt="Wedding 2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-1/3 h-full">
          <Image
            src="/photo/28.webp"
            alt="Wedding 3"
            fill
            className="object-cover"
          />
        </div>

      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
        <h1 className="text-4xl md:text-6xl font-light mb-3">
          Smile Pic Photography
        </h1>
        <p className="text-xs md:text-sm uppercase tracking-[4px]">
          Candid Wedding & Event Photography in Tenkasi
        </p>
      </div>

    </section>
  );
}