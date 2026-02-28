import type { Metadata } from "next";
import HeroSlideshow from "@/components/sections/hero-slideshow";
import AboutPreview from "@/components/sections/about-preview";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import VideoFeature from "@/components/sections/video-feature";
import Testimonials from "@/components/sections/testimonials";
import CtaConnect from "@/components/sections/cta-connect";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Smile Pic Photography | Wedding Photographer in Tenkasi, Tamil Nadu",
  description:
    "Smile Pic Photography is a leading wedding photographer in Tenkasi offering candid wedding photography, cinematic wedding films and premium albums across Tamil Nadu.",
};

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Wedding Photographer in Alangulam, Tenkasi - Tamil Nadu
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Smile Pic Photography is a premium wedding photography studio
          based in Tenkasi specializing in candid wedding photography,
          cinematic wedding films and luxury albums.
        </p>

        <Link
          href="/wedding-photographer-tenkasi"
          className="underline text-black font-medium"
        >
          Learn more about our wedding photography in Tenkasi →
        </Link>
      </section>

      <AboutPreview />
      <PortfolioGrid />
      <VideoFeature />
      <Testimonials />
      <CtaConnect />
    </>
  );
}