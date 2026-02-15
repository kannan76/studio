import React from 'react';
import Image from 'next/image';

/**
 * MiddleBannerImage Component
 * 
 * A full-width cinematic wedding party banner featuring a large horizontal image
 * of a wedding party celebrating on stone steps with flower petals.
 * 
 * Design Instructions:
 * Clone the large horizontal banner image showing a wedding party celebrating on stone steps with flying petals.
 */
const MiddleBannerImage = () => {
  // Asset source from provided list
  const bannerImageSrc = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/560560540_18538233586017493_7573300707422500056_nf-9.jpg";

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* 
        Container for the full-width image. 
        Based on the screenshot, it spans the entire width and has a substantial height.
        The layout uses absolute positioning for the CTA overlaid near the bottom.
      */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] xl:h-[900px]">
        <Image
          src={bannerImageSrc}
          alt="Wedding party celebrating on stone steps with petals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* Overlaying CTA text as seen in the screenshots ("EXPLORE OUR SERVICES") */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center items-center">
          <a
            href="/services"
            className="group flex items-center gap-2 text-white font-sans text-[11px] md:text-[12px] tracking-[0.25em] uppercase transition-opacity hover:opacity-70"
          >
            <span>Explore Our Services</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mt-[-2px]"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MiddleBannerImage;