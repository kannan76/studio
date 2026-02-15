import React from 'react';

const IntroText = () => {
  return (
    <section className="bg-[#F9F9F7] py-[120px] px-5 flex flex-col items-center justify-center text-center">
      <div className="max-w-[1400px] w-full">
        {/* Label Subtitle */}
        <p 
          className="text-black font-sans text-[12px] tracking-[0.25em] uppercase mb-10 leading-none"
          style={{ letterSpacing: '0.25em' }}
        >
          ADELAIDE WEDDING PHOTOGRAPHER
        </p>
        
        {/* Main Heading */}
        <h2 className="text-black font-display text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] uppercase tracking-[0.05em] flex flex-col items-center">
          <span className="block">Your Love Story</span>
          <span className="block">
            Captured <span className="italic">Beautifully.</span>
          </span>
        </h2>
      </div>
    </section>
  );
};

export default IntroText;