import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Featured Weddings', href: '/featured-weddings' },
    { label: 'Investment', href: '/investment' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-[#000000] text-[#FFFFFF] pt-[100px] pb-[40px] px-5 sm:px-10 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section: Monogram and Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10 md:gap-0">
          <div className="flex flex-col items-start max-w-[340px]">
            {/* BP Monogram Logo */}
            <div className="mb-8">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/Belle-Photo-Masterfile-48-scaled-e1758596161346-20.png"
                alt="Bellé Photo Monogram"
                width={85}
                height={62}
                className="brightness-0 invert object-contain"
              />
            </div>
            <p className="font-display italic text-[24px] leading-[1.3] text-[#FFFFFF]">
              Refined and timeless imagery for modern day lovers.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 md:gap-x-24">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] uppercase tracking-[0.15em] hover:text-[#D1D1D1] transition-colors duration-300 font-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Large Text Logo */}
        <div className="w-full text-center border-b border-[#333333] pb-12 mb-8">
          <h2 className="brand-logo text-[#FFFFFF] m-0 leading-[0.8] select-none pointer-events-none">
            BELLÉ PHOTO
          </h2>
        </div>

        {/* Bottom Section: Copyrights */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#737373] gap-4 md:gap-0">
          <p>© 2024 BELLÉ PHOTO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/bellephotoadelaide" 
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              FACEBOOK
            </a>
            <a 
              href="https://www.instagram.com/bellephotoadelaide" 
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              INSTAGRAM
            </a>
            <p className="ml-4">WEBSITE BY SOCIALSPACE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;