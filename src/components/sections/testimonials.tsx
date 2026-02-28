"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aishwarya & Karthik",
    text: "Smile Pic Photography captured our moments beautifully. The entire experience was smooth and professional."
  },
  {
    name: "Nithya & Arjun",
    text: "Every emotion was documented naturally. We couldn't have asked for better memories."
  },
  {
    name: "Harini & Vignesh",
    text: "Comfortable experience, stunning output, and timely delivery. Highly recommended."
  },
  {
    name: "Meera & Rohit",
    text: "Elegant storytelling through photography. We truly cherish every image."
  },
  {
    name: "Shruthi & Naveen",
    text: "Professional, patient, and incredibly talented team."
  },
  {
    name: "Keerthana & Aditya",
    text: "From booking to final album — everything was seamless."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F2F1ED] py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[5px] text-gray-500">
            Testimonials
          </h2>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">

          <div className="flex transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${current * 100}%)` }}>

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center px-4"
              >
                <div
                  className={`max-w-xl w-full p-10 rounded-2xl shadow-xl transition-all duration-500 ${
                    index === current
                      ? "bg-white scale-100 opacity-100"
                      : "bg-white/70 scale-95 opacity-60"
                  }`}
                >
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-[#1A1A1A] mb-8">
                    “{item.text}”
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[2px] text-gray-600">
                      {item.name}
                    </span>

                    <span className="text-xs text-gray-400">
                      ★★★★★
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                current === i
                  ? "w-6 h-2 bg-black rounded-full"
                  : "w-2 h-2 bg-gray-400 rounded-full"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;