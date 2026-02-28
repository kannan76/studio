"use client";

import { MessageCircle, Instagram } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/smile_picphotography/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916382954626"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

    </div>
  );
}