import CtaConnect from "@/components/sections/cta-connect";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-5xl font-semibold">
          Privacy Policy & Terms and Conditions
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 text-gray-700 space-y-6 leading-8">

        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Smile Pic Photography provides wedding and event photography services.
          By using this website or booking our services, you agree to the terms
          outlined on this page.
        </p>

        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <p>
          We may collect your name, phone number, email address, event details,
          and any information shared through contact forms, WhatsApp,
          Instagram, Facebook, or email.
        </p>

        <h2 className="text-2xl font-semibold">3. Use of Information</h2>
        <p>
          Your information is used to respond to inquiries, confirm bookings,
          process payments, provide photography services, and deliver albums
          or digital content.
        </p>

        <h2 className="text-2xl font-semibold">4. Data Protection</h2>
        <p>
          We take reasonable steps to protect your data. However, no online
          system is completely secure.
        </p>

        <h2 className="text-2xl font-semibold">5. Booking Policy</h2>
        <p>
          Bookings are confirmed only after advance payment is received.
          The remaining balance must be paid before final delivery.
        </p>

        <h2 className="text-2xl font-semibold">6. Cancellation & Refund</h2>
        <p>
          Advance payments are non-refundable. In case of postponement,
          we will try to reschedule based on availability.
        </p>

        <h2 className="text-2xl font-semibold">7. Intellectual Property</h2>
        <p>
          All photographs and videos created by Smile Pic Photography remain
          our property. Clients receive personal usage rights only.
          Commercial use requires written permission.
        </p>

        <h2 className="text-2xl font-semibold">8. Portfolio Use</h2>
        <p>
          We may use selected images for portfolio, website,
          and promotional purposes unless agreed otherwise in writing.
        </p>

        <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
        <p>
          We are not responsible for events beyond our control including
          weather conditions, venue restrictions, or equipment failure.
        </p>

        <h2 className="text-2xl font-semibold">10. Governing Law</h2>
        <p>
          These terms are governed by the laws of India.
          Any disputes shall fall under Tamil Nadu jurisdiction.
        </p>

        <h2 className="text-2xl font-semibold">11. Contact</h2>
        <p>
          Smile Pic Photography <br />
          Ambai Rd, Nearby City Union Bank <br />
          Alangulam, Tenkasi, Tamil Nadu 627851 <br />
          Phone: 63829 54626 / 80567 23261
        </p>

      </div>

      <CtaConnect />
    </>
  );
}