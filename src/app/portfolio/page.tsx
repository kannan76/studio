import PortfolioGrid from "@/components/sections/portfolio-grid";
import CtaConnect from "@/components/sections/cta-connect";

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-5xl font-semibold tracking-wide">
          Our Portfolio
        </h1>
      </div>

      <PortfolioGrid />
      <CtaConnect />
    </>
  );
}