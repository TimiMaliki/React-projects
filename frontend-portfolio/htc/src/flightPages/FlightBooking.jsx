// src/pages/Flight.jsx
import React, { useState } from "react";
import { searchDestinations, searchFlights } from "../API/FlightBooking";

const Flight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [toCode, setToCode] = useState("");
  const [fromResults, setFromResults] = useState([]);
  const [toResults, setToResults] = useState([]);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);

  // === Search handlers ===
  const handleSearchFrom = async () => {
    if (!from.trim()) return;
    const results = await searchDestinations(from);
    setFromResults(results);
  };

  const handleSearchTo = async () => {
    if (!to.trim()) return;
    const results = await searchDestinations(to);
    setToResults(results);
  };

  // === Search flights ===
  const handleSearchFlights = async () => {
    if (!fromCode || !toCode) {
      setError("Please select both 'From' and 'To' airports first.");
      return;
    }

    setLoading(true);
    setError("");
    setFlights([]);

    const results = await searchFlights({ fromCode, toCode, date });
    if (results.length > 0) setFlights(results);
    else setError("No flights found for this route.");

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h1 className="text-lg md:text-4xl font-extrabold text-center mb-10 tracking-tight">
          ✈️ HTC Flight We Trust
        </h1>

        {/* === Search Section === */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* FROM */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">From</label>
            <div className="grid md:flex gap-2">
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Enter departure city (e.g Lagos)"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={handleSearchFrom}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-medium"
              >
                Search
              </button>
            </div>
            {fromResults.length > 0 && (
              <ul className="bg-white text-black rounded-lg mt-2 max-h-48 overflow-y-auto shadow-lg">
                {fromResults.map((airport) => (
                  <li
                    key={airport.airportCode}
                    onClick={() => {
                      setFrom(`${airport.displayName || airport.name}`);
                      setFromCode(airport.airportCode);
                      setFromResults([]);
                    }}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {airport.displayName || airport.name} ({airport.airportCode})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* TO */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">To</label>
            <div className="grid md:flex gap-2">
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Enter destination city (e.g Abuja)"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={handleSearchTo}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-medium"
              >
                Search
              </button>
            </div>
            {toResults.length > 0 && (
              <ul className="bg-white text-black rounded-lg mt-2 max-h-48 overflow-y-auto shadow-lg">
                {toResults.map((airport) => (
                  <li
                    key={airport.airportCode}
                    onClick={() => {
                      setTo(`${airport.displayName || airport.name}`);
                      setToCode(airport.airportCode);
                      setToResults([]);
                    }}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {airport.displayName || airport.name} ({airport.airportCode})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* === Date & Search === */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleSearchFlights}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 transition-all px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg"
          >
            {loading ? "Searching..." : "Find Flights"}
          </button>
        </div>

        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}

        {/* === Results === */}
        <div className="mt-12 space-y-6">
          {flights.map((f, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 flex justify-between items-center hover:bg-white/20 transition-all"
            >
              <div>
                <h3 className="font-semibold text-xl">
                  {f.segments?.[0]?.marketingCarrier?.displayName || "Unknown Airline"}
                </h3>
                <p className="text-gray-300 mt-1">
                  {f.segments?.[0]?.departureAirportCode} → {f.segments?.[0]?.arrivalAirportCode}
                </p>
              </div>

              <div className="text-right">
                <p className="text-blue-400 text-lg font-semibold">
                  {f.purchaseLink?.totalPrice?.formatted || "N/A"}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {f.totalDuration || "Unknown duration"}
                </p>
                <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flight;
