import React from 'react';

/**
 * PortfolioPreview component clones the "The PORTFOLIO" introductory heading section.
 * It features a large serif heading with a specific italic styling for "The",
 * a centered subtext, and a "VIEW OUR PORTFOLIO" call-to-action link.
 */
const PortfolioPreview: React.FC = () => {
  return (
    <section className="bg-[#F9F9F7] py-[120px] px-5 flex flex-col items-center justify-center text-center">
      {/* Introductory Heading */}
      <div className="mb-6">
        <h2 
          className="font-display text-[72px] font-normal leading-tight tracking-[0.05em] uppercase text-black"
          style={{ fontSize: 'clamp(40px, 8vw, 72px)' }}
        >
          <span className="italic normal-case mr-4">The</span>
          PORTFOLIO
        </h2>
        <p className="font-sans text-[12px] tracking-[0.25em] uppercase font-normal mt-4 text-black opacity-80">
          VIEW A CURATED SELECTION OF OUR WORK.
        </p>
      </div>

        {/* Primary CTA Link */}
        <div className="mt-10">
        <a 
          href="/portfolio" 
          className="cta-link group flex items-center gap-2 text-black transition-opacity hover:opacity-70"
        >
          <span className="font-sans text-[13px] tracking-[0.15em] uppercase">
            VIEW OUR PORTFOLIO
          </span>
          <span className="text-[14px]">↗</span>
        </a>
      </div>
    </section>
  );
};

export default PortfolioPreview;