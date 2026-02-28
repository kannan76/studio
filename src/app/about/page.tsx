import AboutPreview from "@/components/sections/about-preview";
import Testimonials from "@/components/sections/testimonials";
import CtaConnect from "@/components/sections/cta-connect";

export default function AboutPage() {
  return (
    <>
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-5xl font-semibold tracking-wide">
          About Smile Pic
        </h1>
      </div>

      <AboutPreview />
      <Testimonials />
      <CtaConnect />
    </>
  );
}