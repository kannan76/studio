import BookingCalendar from "@/components/ui/BookingCalendar";
import CtaConnect from "@/components/sections/cta-connect";

export default function ContactPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-5xl font-semibold tracking-wide">
          Contact Us
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Let’s create something unforgettable together.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-semibold mb-4">Phone</h2>
            <p>
              <a href="tel:6382954626" className="underline">
                63829 54626
              </a>
            </p>
            <p>
              <a href="tel:8056723261" className="underline">
                80567 23261
              </a>
            </p>
            <p>
              <a href="mailto:smilepicphotography03@gmail.com" className="underline">
                smilepicphotography03@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Address</h2>
            <p>
              Ambai Rd, Nearby City Union Bank <br />
              Alangulam, Tenkasi, Tamil Nadu 627851
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <a
              href="https://www.instagram.com/smile_picphotography/"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61579183461783"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline"
            >
              Facebook
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.5427130966624!2d77.49478551757015!3d8.863681413717593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc808bf814d513f%3A0xa8c20895ecd8a3ef!2sSmile%20Pic%20Photography!5e0!3m2!1sen!2sin!4v1772249523802!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* BOOKING SECTION */}
      <div className="py-24 bg-gray-50">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-semibold">
            Book Your Event Date
          </h2>
          <p className="mt-4 text-gray-600">
            Select your preferred date to check availability.
          </p>
        </div>

        <div className="px-6">
          <BookingCalendar />
        </div>
      </div>

      <CtaConnect />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/916382954626?text=Hello%20Smile%20Pic%20Photography,%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          fill="white"
        >
          <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.893.756 5.716 2.19 8.188L0 32l7.66-2.149a15.93 15.93 0 0 0 8.34 2.39h.006C24.843 32.24 32 25.077 32 16.24 32 7.403 24.837.396 16 .396zm0 29.095a13.07 13.07 0 0 1-6.663-1.82l-.478-.283-4.547 1.275 1.214-4.435-.311-.497a13.04 13.04 0 0 1-2.01-7.024c0-7.205 5.864-13.069 13.069-13.069 7.204 0 13.069 5.864 13.069 13.069 0 7.205-5.865 13.069-13.07 13.069zm7.56-9.803c-.414-.207-2.45-1.208-2.83-1.345-.38-.138-.657-.207-.935.207-.276.414-1.07 1.345-1.312 1.62-.242.276-.483.31-.897.103-.414-.207-1.75-.645-3.333-2.058-1.23-1.097-2.06-2.453-2.3-2.867-.242-.414-.026-.638.182-.845.187-.186.414-.483.62-.724.207-.242.276-.414.414-.69.138-.276.069-.517-.035-.724-.103-.207-.935-2.25-1.28-3.084-.338-.81-.68-.7-.935-.713l-.797-.014c-.276 0-.724.103-1.103.517-.38.414-1.45 1.415-1.45 3.45 0 2.035 1.484 4.004 1.69 4.28.207.276 2.92 4.463 7.078 6.26 2.475 1.07 3.444 1.16 4.68.974.756-.112 2.45-1.001 2.794-1.966.345-.965.345-1.793.242-1.966-.103-.173-.38-.276-.793-.483z"/>
        </svg>
        WhatsApp
      </a>
    </>
  );
}