"use client";

import React from 'react';
import Image from 'next/image';

/**
 * CtaConnect component for Smile Pic Photography.
 */
const CtaConnect: React.FC = () => {

  const backgroundImage = "/ct.jpg"; // Local image from public folder

  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Smile Pic Photography creative portrait session"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container h-full mx-auto px-8 flex flex-col justify-center">
        <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-white font-display text-[64px] leading-tight mb-8">
              Let’s Capture Your Special Moments
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start md:items-end md:text-right">
             <div className="max-w-[400px] flex flex-col items-start md:items-end">
                <p className="text-white font-sans text-[12px] font-bold uppercase tracking-[3px] leading-relaxed mb-8">
                  Planning your celebration in Tenkasi or anywhere in Tamil Nadu? 
                  Smile Pic Photography creates timeless visual stories with elegance, 
                  creativity, and authentic emotion.
                </p>
                
                <a 
                  href="/contact" 
                  className="inline-block px-10 py-[14px] border border-white/60 text-white font-sans text-[11px] font-semibold uppercase tracking-[2px] rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                >
                  BOOK YOUR DATE NOW
                </a>
             </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 600px;
          }
          h2 {
            font-size: 40px;
          }
          .grid {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .md\:items-end {
            align-items: center;
          }
          .md\:text-right {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CtaConnect;