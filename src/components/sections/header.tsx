"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Smile Pic", href: "/about" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Wedding Films", href: "/video" },
    { name: "Contact Us", href: "/contact" },
  ];

  // 🔥 TEXT COLOR LOGIC
  const navTextColor =
    isHome && !isScrolled ? "text-white" : "text-black";

  const logoStyle =
    isHome && !isScrolled
      ? "brightness-0 invert"
      : "brightness-100";

  const headerBg =
    isHome && !isScrolled
      ? "bg-transparent py-8"
      : "bg-white/95 backdrop-blur-sm shadow-sm py-4";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${headerBg}`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3">

          {/* Logo */}
          <div className="lg:col-start-2 flex justify-center order-2 lg:order-none">
            <Link href="/" className="inline-block relative">
              <Image
                src="/logo.png"
                alt="Smile Pic Photography"
                width={400}
                height={120}
                className={`transition-all duration-300 w-auto h-16 md:h-20 lg:h-24 ${logoStyle}`}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:col-start-1 lg:col-span-3 items-center justify-center mt-8">
            <nav>
              <ul className="flex items-center space-x-10">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-[13px] tracking-[1.5px] uppercase font-sans transition-colors duration-300 ${navTextColor} hover:opacity-70`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden order-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${navTextColor}`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="lg:hidden w-10 order-3"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#F2F1ED] z-40 transition-transform duration-500 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-8">
          <nav className="w-full">
            <ul className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-black text-lg tracking-[3px] uppercase font-sans font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;