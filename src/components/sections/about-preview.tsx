"use client";

import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="bg-[#F2F1ED] section-padding overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex gap-4 md:gap-8 items-start justify-center lg:justify-start">
            
            <div className="w-1/2 md:w-[300px] flex-shrink-0 mt-20">
              <div className="relative aspect-[2/3] w-full bg-muted overflow-hidden">
                <Image
                  src="/photo/20.webp"
                  alt="Wedding Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>

            <div className="w-1/2 md:w-[340px] flex flex-col gap-6 md:gap-4">
              
              <div className="relative aspect-[3/4] w-full bg-muted overflow-hidden">
                <Image
                  src="/photo/36.webp"
                  alt="Wedding Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 340px"
                />
              </div>

              <div className="relative aspect-[4/5] w-full bg-muted overflow-hidden">
                <Image
                  src="/photo/8.webp"
                  alt="Wedding Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 340px"
                />
              </div>

            </div>
          </div>

          <div className="flex flex-col items-start max-w-xl">
            <span className="text-label text-[#8C8C8C] mb-8 block">
              Why Smile Pic Photography?
            </span>
            
            <h2 className="font-display text-[32px] md:text-[36px] lg:text-[42px] leading-[1.2] text-[#1A1A1A] mb-10 italic">
              Timeless wedding stories captured with emotion, elegance, and authenticity
            </h2>
            
            <p className="font-serif text-[16px] md:text-[18px] leading-[1.8] text-[#1A1A1A]/80 mb-12">
              At Smile Pic Photography, we believe every wedding is a once-in-a-lifetime story filled with real emotions,
              meaningful traditions, and unforgettable moments. Based in Tenkasi, Tamil Nadu, we specialize in candid wedding
              photography, traditional ceremony coverage, engagement shoots, pre-wedding sessions, and cinematic wedding films.
              <br /><br />
              Our approach blends creativity with technical precision, ensuring that every smile, every tear, and every sacred ritual
              is captured beautifully and naturally. We focus on storytelling — not just taking pictures, but preserving memories
              that you and your family will cherish for generations.
              <br /><br />
              With a client-first mindset, professional equipment, and on-time delivery, we provide a seamless experience from
              booking to final album handover. Whether it’s a grand traditional Tamil wedding or an intimate celebration,
              Smile Pic Photography is committed to capturing your special day with passion, dedication, and artistic excellence.
            </p>

            <a
              href="/about"
              className="btn-ghost inline-block hover:bg-[#1A1A1A] hover:text-[#F2F1ED] transition-colors duration-300"
            >
              Discover Our Story
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}