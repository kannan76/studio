import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F7]">
      {/* Main Hero Split Content */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 h-[75vh] md:h-[calc(100vh-180px)] min-h-[500px]">
        {/* Left Side Image */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/Belle-Photo-Masterfile-01-scaled-1-1.png"
            alt="Cinematic wedding photography - garden scene"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side Image */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/Belle-Photo-Masterfile-34-scaled-1-19.png"
            alt="Cinematic wedding photography - church ceremony"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Center Overlay Monogram & Tagline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-4">
            {/* BP Monogram Logo */}
            <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full filter drop-shadow-lg"
              >
                <path 
                  d="M45 30V70C45 70 55 70 60 70C70 70 75 62 75 50C75 38 70 30 60 30H45ZM52 36H58C65 36 68 40 68 50C68 60 65 64 58 64H52V36Z" 
                  fill="white"
                />
                <path 
                  d="M25 30V70H32V30H25Z" 
                  fill="white"
                />
                <path 
                  d="M32 30V40H45C45 40 45 30 32 30Z" 
                  fill="white"
                />
              </svg>
            </div>
            
            {/* Tagline */}
            <p className="text-white font-display italic text-lg md:text-3xl tracking-widest drop-shadow-md">
              Where Beauty Meets Love.
            </p>
          </div>
        </div>

        {/* Small Navigation/CTA bottom indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto">
          <a 
            href="#portfolio" 
            className="text-[10px] md:text-[11px] tracking-[0.3em] text-white uppercase font-sans flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            Explore our work <span className="text-xs">↗</span>
          </a>
        </div>
      </div>

      {/* Styled Tagline Statement Section */}
      <div className="bg-[#F9F9F7] py-24 md:py-32 px-5 text-center">
        <span className="label-text block mb-6 text-black opacity-60">
          Adelaide Wedding Photographer
        </span>
        <h2 className="text-4xl md:text-[72px] leading-[1.1] text-black max-w-5xl mx-auto">
          Your Love Story <br />
          Captured <span className="font-italic">Beautifully.</span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
