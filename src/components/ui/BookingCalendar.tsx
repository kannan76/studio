"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingCalendar() {
  const [selected, setSelected] = useState<Date | undefined>();

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;

    setSelected(date);

    const formattedDate = date.toDateString();

    const message = `Hello Smile Pic Photography,

I would like to book the date: ${formattedDate}.

Please share:
• Availability confirmation
• Package details
• Pricing information
• Advance payment details

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "916382954626"; // your WhatsApp number with country code

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleSelect}
        fromDate={new Date()}
      />

      {selected && (
        <p className="mt-4 text-center font-medium text-green-600">
          Redirecting to WhatsApp...
        </p>
      )}
    </div>
  );
}