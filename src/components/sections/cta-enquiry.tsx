import React from 'react';
import Image from 'next/image';

/**
 * CTAEnquiry Component
 * 
 * Clones the "SOMETHING BEAUTIFUL" call-to-action section with extreme precision.
 * Features a high-contrast editorial design with a scenic background image of a 
 * couple walking through a garden near a fountain.
 */
export default function CTAEnquiry() {
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/adelaide-hills-wedding-photographer-the-manor-brid-23.jpg";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Container with Parallax-like feel */}
        <div className="relative h-[80vh] min-h-[550px] w-full">
        <Image
          src={backgroundImage}
          alt="Couple walking through a garden near a fountain"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        
        {/* Subtle Overlay to ensure text legibility while maintaining editorial feel */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 lg:pt-32 px-5 text-center text-white">
          <div className="max-w-[700px] w-full flex flex-col items-center space-y-6">
            
            {/* Label / Sub-headline */}
            <span className="font-display italic text-sm lg:text-base tracking-[0.1em] lowercase py-2">
              Let&apos;s Create
            </span>

            {/* Main CTA Heading */}
            <h2 className="font-display text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.1] tracking-[0.05em] uppercase font-normal max-w-[800px]">
              Something<br />Beautiful
            </h2>

            {/* Teaser Text */}
            <p className="font-sans text-[13px] md:text-sm lg:text-[15px] leading-relaxed tracking-wider mt-4 px-4 max-w-[500px] font-light opacity-90">
              I&apos;d love to hear from you. Enquire to explore my collections and reserve your wedding date.
            </p>

            {/* Action Link */}
            <div className="mt-10">
              <a 
                href="/contact" 
                className="group flex items-center gap-2 font-sans text-[12px] md:text-[13px] tracking-[0.3em] uppercase border-b border-white/40 pb-1 hover:border-white transition-all duration-300"
              >
                Enquire
                <span className="text-[10px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}