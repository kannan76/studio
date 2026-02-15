"use client";

import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import WelcomeArtist from "@/components/sections/welcome-artist";
import PortfolioPreview from "@/components/sections/portfolio-preview";
import FeaturedWeddingsCarousel from "@/components/sections/featured-weddings-carousel";
import MiddleBannerImage from "@/components/sections/middle-banner-image";
import Testimonials from "@/components/sections/testimonials";
import CTAEnquiry from "@/components/sections/cta-enquiry";
import VisualGalleryMosaic from "@/components/sections/visual-gallery-mosaic";
import InstagramGrid from "@/components/sections/instagram-grid";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9F7]">
      <Header />
      <HeroSection />
      <WelcomeArtist />
      <PortfolioPreview />
      <FeaturedWeddingsCarousel />
      <MiddleBannerImage />
      <Testimonials />
      <CTAEnquiry />
      <VisualGalleryMosaic />
      <InstagramGrid />
      <Footer />
    </main>
  );
}
