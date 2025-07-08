import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to TravelMate</h1>
      <p className="mb-4">Find and book your next adventure!</p>
      <Link to="/book" className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</Link>
    </div>
  );
}
