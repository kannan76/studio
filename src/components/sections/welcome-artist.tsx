import React from 'react';

/**
 * WelcomeArtist Section
 * 
 * A dark aesthetic section with a black background, white serif typography, 
 * and an editorial layout describing the artist Joe D'Angelo.
 */
const WelcomeArtist: React.FC = () => {
  return (
    <section className="bg-black text-white py-[100px] md:py-[120px] lg:py-[150px] overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-end items-start gap-10 md:gap-0">
          <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[40%]">
            <h2 className="font-display text-[42px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[0.02em] uppercase mb-10 md:mb-12">
              Welcome<br />
              to Bellé
            </h2>
            
            <div className="space-y-8 max-w-[580px]">
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] font-light text-white/90">
                Recognised as one of Adelaide’s best and most experienced 
                wedding photographer, Joe D’Angelo creates authentic, 
                timeless imagery with a refined editorial flair and is dedicated 
                to capturing love in its most beautiful form.
              </p>
              
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] font-light text-white/90">
                He believe’s photography is the art of emotion: to feel deeply, 
                to love beautifully. Every image he create’s is part of a visual 
                story — iconic, intimate and uniquely yours.
              </p>
              
              <div className="pt-4">
                <a 
                  href="/about" 
                  className="group inline-flex items-center gap-3 text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-sans transition-opacity duration-300 hover:opacity-70"
                >
                  Meet the artist
                  <span className="text-[14px] leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeArtist;