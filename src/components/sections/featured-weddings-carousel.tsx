"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FeaturedWeddingsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const weddings = [
    {
      id: 1,
      couple: "Alexandra\n& Fabian",
      location: "St Patrick’s Church\n& JDF Receptions.",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/alexandra-fabian-st-patricks-church-jdf-receptions-3.jpg",
    },
    {
      id: 2,
      couple: "Mariah\n& Christopher",
      location: "St Patrick’s Church\n& Sfera’s Convention Centre.",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/city-wedding-couple-walking-adelaide-railway-stati-22.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === weddings.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? weddings.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#F9F9F7] py-[120px] px-5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[52px] md:text-[72px] font-display uppercase leading-[1.1] mb-4 tracking-wider">
            Featured <span className="italic font-normal">Weddings</span>
          </h2>
          <p className="text-[12px] uppercase tracking-[0.25em] font-sans font-light">
            A visual journey of love and timeless wedding stories.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group mx-auto max-w-[900px]">
          {/* Main Content Area */}
          <div className="relative flex flex-col">
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] w-full overflow-hidden transition-all duration-700 ease-in-out">
              <Image
                src={weddings[currentIndex].image}
                alt={weddings[currentIndex].couple.replace("\n", " ")}
                fill
                className="object-cover transition-transform duration-700"
                priority
              />

              {/* Navigation Arrows - Desktop Only Overlay Positioning */}
              <button
                onClick={prevSlide}
                className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors hidden md:flex"
                aria-label="Previous slide"
              >
                <ArrowLeft className="text-white w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors hidden md:flex"
                aria-label="Next slide"
              >
                <ArrowRight className="text-white w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Wedding Details */}
            <div className="mt-12 text-left mb-4">
              <h3 className="text-[32px] md:text-[42px] font-display uppercase tracking-wide leading-[1.1] whitespace-pre-line mb-4 font-normal">
                {weddings[currentIndex].couple}
              </h3>
              <p className="text-[15px] text-foreground font-sans font-light leading-relaxed whitespace-pre-line mb-6">
                {weddings[currentIndex].location}
              </p>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-sans hover:opacity-60 transition-opacity"
              >
                View Gallery <span className="text-[14px]">↗</span>
              </a>
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex gap-4 justify-center mt-8 md:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWeddingsCarousel;