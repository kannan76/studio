"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Smile Pic", href: "/about" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Wedding Films", href: "/video" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" }, // ✅ FIXED
  ];

  return (
    <footer className="footer-section bg-[#F2F1ED] text-[#1A1A1A] py-16 lg:py-24">
      <div className="container mx-auto px-8 max-w-[1440px]">

        {/* Social Media */}
        <div className="flex flex-col items-center justify-center mb-24 lg:mb-32">
          <div className="flex items-center gap-12 lg:gap-16">

            <a
              href="https://www.facebook.com/profile.php?id=61584366203101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.instagram.com/smile_picphotography/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>

            <a
              href="#"
              className="text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={22} strokeWidth={1.5} />
            </a>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-12 border-t border-transparent">

          {/* Copyright */}
          <div className="order-2 lg:order-1">
            <h4 className="font-sans text-[11px] font-semibold tracking-[2px] uppercase">
              © {new Date().getFullYear()} SMILE PIC PHOTOGRAPHY | ALANGULAM, TENKASI 
            </h4>
          </div>

          {/* Quick Links */}
          <nav className="order-1 lg:order-2">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 lg:gap-x-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-[11px] tracking-[1.5px] uppercase hover:text-[#8C8C8C] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back To Top */}
          <div className="order-3 lg:ml-4">
            <button
              onClick={scrollToTop}
              className="hover:text-[#8C8C8C] transition-colors duration-300 transform hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp size={18} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;