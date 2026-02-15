import React from 'react';
import Image from 'next/image';

/**
 * VisualGalleryMosaic Component
 * 
 * Clones the vertical sequence of dramatic wedding images:
 * 1. A bride lying on a sofa (full-width cinematic).
 * 2. A couple kissing in front of the Supreme Court building architectural shot.
 * 
 * Design characteristics: Sharp edges (radius 0), zero gaps between vertical items,
 * and high-impact editorial sizing.
 */
const VisualGalleryMosaic: React.FC = () => {
  return (
    <section className="w-full bg-[#F9F9F7] overflow-hidden">
      {/* Container for the vertical sequence */}
      <div className="flex flex-col w-full">
        
        {/* Sequence Item 1: Bride lying on a sofa */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/7]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/romantic-wedding-photography-adelaide-160-1-24.jpg"
            alt="Bride in elegant white dress lying gracefully on a vintage sofa"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Subtle overlay to match the editorial "vibe" if needed, 
              though based on screenshots it looks like a clean high-contrast photo */}
        </div>

        {/* Sequence Item 2: Couple kissing at the Supreme Court */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/1.2]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/belle-photo-adelaide-couple-portraits-101-1-25.jpg"
            alt="Wedding couple kissing in front of the majestic Supreme Court building"
            fill
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
        </div>

      </div>


    </section>
  );
};

export default VisualGalleryMosaic;