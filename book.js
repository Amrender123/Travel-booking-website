import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Book() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleBooking = async () => {
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destination, date })
    });
    const data = await res.json();
    if (data.success) navigate("/payment");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Book Your Trip</h2>
      <input
        className="border p-2 mb-2 block"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        className="border p-2 mb-4 block"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleBooking} className="bg-green-600 text-white px-4 py-2 rounded">
        Continue to Payment
      </button>
    </div>
  );
}
