import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smilepicphotography.online"),
  title:
    "Smile Pic Photography | Wedding Photographer in Tenkasi, Tamil Nadu",
  description:
    "Smile Pic Photography is a premium wedding photography studio in Tenkasi, Tamil Nadu, capturing timeless, candid and cinematic wedding moments.",

  openGraph: {
    title:
      "Smile Pic Photography | Wedding Photographer in Tenkasi",
    description:
      "Premium wedding photography in Tenkasi & across Tamil Nadu.",
    url: "https://www.smilepicphotography.online",
    siteName: "Smile Pic Photography",
    images: [
      {
        url: "/og-image.jpg", // Put 1200x630 image in public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        <LayoutWrapper>{children}</LayoutWrapper>

        <Footer />
        <FloatingWhatsapp />
        <VisualEditsMessenger />

        {/* 🔥 Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Smile Pic Photography",
              url: "https://www.smilepicphotography.online",
              logo: "https://www.smilepicphotography.online/logo.png",
              image:
                "https://www.smilepicphotography.online/og-image.jpg",
              telephone: "+916382954626",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ambai Rd, Nearby City Union Bank, Alangulam",
                addressLocality: "Tenkasi",
                addressRegion: "Tamil Nadu",
                postalCode: "627851",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Place",
                name: "Tamil Nadu",
              },
              sameAs: [
                "https://www.instagram.com/smile_picphotography/",
                "https://www.facebook.com/profile.php?id=61579183461783",
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: 8.8636814,
                longitude: 77.4947855,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}