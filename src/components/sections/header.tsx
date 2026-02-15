"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Featured Weddings", href: "/featured-weddings" },
    { name: "Investment", href: "/investment" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="relative w-full z-[100] bg-[#F9F9F7]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          {/* Top navigation row */}
          <nav className="flex items-center justify-between py-5 lg:py-7">
            {/* Burger Toggle */}
            <div className="flex-1 lg:flex-none">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-3 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div className="relative w-6 h-4 flex flex-col justify-between">
                  <span className="block w-full h-[1px] bg-black transition-all duration-300" />
                  <span className="block w-full h-[1px] bg-black transition-all duration-300" />
                  <span className="block w-full h-[1px] bg-black transition-all duration-300" />
                </div>
                <span className="hidden lg:inline text-[11px] tracking-[0.2em] font-sans uppercase font-normal">
                  Menu
                </span>
              </button>
            </div>

            {/* Desktop Navigation Links (Center) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 5).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] tracking-[0.15em] font-sans uppercase font-normal hover:opacity-50 transition-opacity duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Contact Link (Right) */}
            <div className="hidden lg:flex flex-1 justify-end">
              <a
                href="/contact"
                className="text-[11px] tracking-[0.15em] font-sans uppercase font-normal hover:opacity-50 transition-opacity duration-300"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Large Branding Logo */}
          <div className="py-10 lg:py-16 flex justify-center overflow-hidden">
            <h1 className="brand-logo text-black select-none pointer-events-none whitespace-nowrap">
              BELL<span className="inline">É</span> PHOTO
            </h1>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[200] bg-[#F9F9F7] transition-all duration-700 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-0 w-full px-5 lg:px-10 py-5 lg:py-7 flex justify-between items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 focus:outline-none"
          >
            <X className="w-5 h-5 text-black" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.2em] uppercase font-sans">
              Close
            </span>
          </button>
        </div>

        <div className="h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-10">
          {/* Image side - only on desktop */}
          <div className="hidden lg:flex w-1/2 h-full items-center justify-center p-16">
            <div className="relative w-full h-[550px] max-w-[420px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/91208dd0-1aa9-434e-a433-c2aa4b77c385-bellephoto-com-au/assets/images/Belle-Photo-Masterfile-35-scaled-1.png"
                alt="Wedding photography"
                fill
                className="object-cover"
                sizes="420px"
                unoptimized
              />
            </div>
          </div>

          {/* Links side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center">
            <ul className="flex flex-col gap-5 lg:gap-8 text-center lg:text-right">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className={`transform transition-all duration-600 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-block text-[28px] lg:text-[56px] font-display uppercase tracking-tight leading-none hover:italic transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-14 flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase font-sans border-b border-black pb-1 hover:opacity-50 transition-opacity"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase font-sans border-b border-black pb-1 hover:opacity-50 transition-opacity"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
