"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const videos = Array.from({ length: 6 }, (_, i) => `/video/${i + 1}.mp4`);

const VideoFeature = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto switch videos every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) =>
        prev === videos.length - 1 ? 0 : prev + 1
      );
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  // Toggle sound
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black">

      {/* Background Video */}
      <video
        key={currentVideo}
        ref={videoRef}
        src={videos[currentVideo]}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Cinematic Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade">
          <h2 className="text-white text-[16px] md:text-[20px] tracking-[6px] uppercase font-semibold mb-6">
            Smile Pic Photography
          </h2>
          <p className="text-white/80 text-[12px] md:text-[14px] tracking-[3px] uppercase">
            Cinematic Visual Stories
          </p>
        </div>
      </div>

      {/* Sound Toggle Button */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={toggleSound}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white hover:scale-110 transition-all duration-300"
          aria-label="Toggle Sound"
        >
          {isMuted ? (
            <VolumeX className="text-white w-5 h-5" />
          ) : (
            <Volume2 className="text-black w-5 h-5" />
          )}
        </button>
      </div>

      <style jsx global>{`
        .animate-fade {
          animation: fadeInUp 1.5s ease;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
};

export default VideoFeature;