import VideoFeature from "@/components/sections/video-feature";
import CtaConnect from "@/components/sections/cta-connect";

export default function VideoPage() {
  return (
    <>
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-5xl font-semibold tracking-wide">
          Wedding Films
        </h1>
      </div>

      <VideoFeature />
      <CtaConnect />
    </>
  );
}