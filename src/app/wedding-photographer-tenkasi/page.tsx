import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Photographer in Tenkasi | Smile Pic Photography",
  description:
    "Looking for the best wedding photographer in Tenkasi? Smile Pic Photography captures candid, cinematic and traditional wedding moments across Tenkasi and Tamil Nadu.",

  openGraph: {
    title: "Wedding Photographer in Tenkasi | Smile Pic Photography",
    description:
      "Smile Pic Photography captures candid, cinematic and traditional wedding moments across Tenkasi and Tamil Nadu.",
    images: [
      {
        url: "/photo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Photography in Tenkasi - Smile Pic Photography",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wedding Photographer in Tenkasi | Smile Pic Photography",
    description:
      "Professional wedding photographer in Tenkasi offering candid, cinematic and traditional photography services.",
    images: ["/photo/og-image.jpg"],
  },
};

export default function WeddingPhotographerTenkasi() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8">
        Wedding Photographer in Tenkasi
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Smile Pic Photography is a leading wedding photographer in Tenkasi,
        Tamil Nadu, known for capturing timeless, emotional and cinematic
        wedding stories. We specialize in candid wedding photography,
        traditional ceremonies, pre-wedding shoots, and luxury wedding films.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        From grand temple weddings near Courtallam to intimate ceremonies in
        Alangulam and across Tenkasi district, our team ensures every moment is
        beautifully documented with creativity and precision.
      </p>

      {/* Featured Image */}
      <div className="my-12">
        <Image
          src="/photo/og-image.jpg"
          alt="Wedding Photography in Tenkasi Tamil Nadu"
          width={1200}
          height={800}
          className="rounded-xl shadow-lg w-full h-auto"
          priority
        />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">
        Why Choose Smile Pic Photography in Tenkasi?
      </h2>

      <ul className="space-y-4 text-gray-700 text-lg">
        <li>✔ Professional candid wedding photography</li>
        <li>✔ Cinematic wedding films</li>
        <li>✔ Experienced local photography team</li>
        <li>✔ Coverage across Tenkasi & Tamil Nadu</li>
        <li>✔ High-quality albums & premium editing</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-16 mb-6">
        Wedding Photography Services in Tenkasi
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We provide complete wedding coverage including engagement shoots,
        mehendi, sangeet, reception, and full wedding day documentation.
        Whether your wedding is at a temple, marriage hall, or outdoor venue in
        Tenkasi, we capture authentic emotions that last a lifetime.
      </p>

      <h2 className="text-3xl font-semibold mt-16 mb-6">
        Book the Best Wedding Photographer in Tenkasi
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        If you are planning your wedding in Tenkasi or nearby areas like
        Tirunelveli, Alangulam, or Courtallam, contact Smile Pic Photography to
        check availability and pricing.
      </p>

      <Link
        href="/contact"
        className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg hover:opacity-80 transition"
      >
        Check Availability
      </Link>
    </div>
  );
}