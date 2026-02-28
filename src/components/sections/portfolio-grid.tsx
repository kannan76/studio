"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const portfolioImages = Array.from({ length: 43 }, (_, i) => ({
  src: `/photo/${i + 1}.webp`,
  alt: `Smile Pic Photography portfolio image ${i + 1}`,
}));

const PortfolioGrid = () => {

  useEffect(() => {
    const disableRightClick = (e: { preventDefault: () => any; }) => e.preventDefault();
    const disableKeys = (e: { ctrlKey: any; key: string; preventDefault: () => void; }) => {
      if (
        e.ctrlKey &&
        (e.key === "s" || e.key === "u" || e.key === "S" || e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return (
    <section className="bg-[#F2F1ED] py-[120px] select-none">
      <div className="container mx-auto px-4 md:px-8">

        <div className="text-center mb-[60px]">
          <h3 className="font-serif text-[28px] md:text-[36px] text-[#42403B]">
            Gallery 
          </h3>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative w-full overflow-hidden pointer-events-none"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                draggable={false}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioGrid;