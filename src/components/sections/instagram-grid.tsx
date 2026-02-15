import React from 'react';
import Image from 'next/image';

/**
 * InstagramGrid Component
 * Clones the bottom 4-column edge-to-edge image grid showcasing recent works
 * as seen in the Instagram feed integration.
 */
const InstagramGrid = () => {
  // Assets provided in the prompt mapping to the 4-column grid
  const recentWorks = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/490473487_18504346933017493_3962701032768896039_nf-15.jpg",
      alt: "Wedding preparation - Bride and dress",
      type: "video", // Based on the screenshot icon
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/489573874_18503066506017493_23308127617661081_nful-16.jpg",
      alt: "Couple posing in front of a stone building",
      type: "carousel",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/472461369_18484939009017493_5390845979088268858_nf-17.jpg",
      alt: "Bride and Groom portrait in front of large window",
      type: "carousel",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/471943383_18483288061017493_8917376662435023206_nf-18.jpg",
      alt: "Couple being celebrated with confetti at wedding ceremony",
      type: "carousel",
    },
  ];

  return (
    <section className="w-full bg-[#F9F9F7]">
      {/* 
        The grid is edge-to-edge as per design instructions.
        It uses 4 columns on desktop and 2 columns on mobile.
      */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-0 px-0">
        {recentWorks.map((item, index) => (
          <a
            key={index}
            href="https://www.instagram.com/bellephotoadelaide"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/5] overflow-hidden"
          >
            <Image
              src={item.url}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            
            {/* Overlay Icon (Instagram style) */}
            <div className="absolute top-4 right-4 z-10 opacity-80">
              {item.type === 'video' ? (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="white"
                  strokeWidth="2"
                  fill="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-sm"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-sm"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="3" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="8" y2="21" />
                </svg>
              )}
            </div>

            {/* Hover state overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* "Today's Stunning Bride" text overlay for the first image as seen in screenshot */}
            {index === 0 && (
              <div className="absolute bottom-6 left-0 right-0 text-center px-4 pointer-events-none">
                <p className="font-display italic text-white text-[18px] md:text-[20px] leading-tight drop-shadow-md">
                  Today&apos;s Stunning Bride Kristina 🤍
                </p>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramGrid;