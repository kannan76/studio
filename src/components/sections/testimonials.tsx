import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-[#E0E0E0] py-[120px] px-5 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center relative">
        {/* Label Header */}
        <div className="mb-14">
          <span className="label-text text-[12px] tracking-[0.25em] text-black font-normal">
            CLIENT LOVE
          </span>
        </div>

        {/* Testimonial Slider / Content Wrapper */}
        <div className="relative group">
          {/* Main Quote */}
          <h2 className="font-display italic text-[24px] md:text-[32px] lg:text-[36px] leading-[1.3] text-black mb-10 max-w-[800px] mx-auto px-4">
            &ldquo;Joe was one of the absolute standouts of our special day.&rdquo;
          </h2>

          {/* Narrative Review Text */}
          <div className="max-w-[850px] mx-auto mb-10">
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] text-black font-light text-center">
              Joe was one of the absolute standouts of our special day. Prior to our wedding, my wife and I knew what we wanted; classic, traditional shots, but with a modern feel. We were always impressed with past weddings of relatives and friends who chose Joe, and we were both so happy that we managed to book with him! Joe will make the process super simple, and will make your vision come to life. The initial consultation at his studio was a breeze; we told him exactly what we were after, and he showed us his portfolio and offered his long-standing professional advice for the day. On our wedding day, Joe was punctual and super professional, but his signature is his personable approach to photoshoots. Our photos and angles felt natural, and the whole experience was incredible. Highly Recommended - thank you Joe for making our day truly special!
            </p>
          </div>

          {/* Client Name */}
          <div className="mb-8">
            <cite className="font-display italic text-[18px] md:text-[20px] text-black not-italic">
              Sharleen & Chris
            </cite>
          </div>

          {/* Navigation Arrows - Using Lucide icons for pixel-perfect UI utility */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-60px] hidden md:block">
            <button 
              className="p-2 text-black hover:opacity-50 transition-opacity" 
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-60px] hidden md:block">
            <button 
              className="p-2 text-black hover:opacity-50 transition-opacity" 
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} strokeWidth={1} />
            </button>
          </div>

          {/* Mobile Arrows (Bottom centered) */}
          <div className="flex items-center justify-center gap-10 md:hidden mt-8">
            <button className="p-2 text-black" aria-label="Previous testimonial">
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button className="p-2 text-black" aria-label="Next testimonial">
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}