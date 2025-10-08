// src/pages/CarRentals.jsx
import React, { useState } from "react";
import { searchDestinations, searchCarRentals, getVehicleDetails } from "../API/carBooking";
import CarMap from "../CarPages/CarMap";
import CarList from "../CarPages/CarList";

const knownCityFallbacks = {
  "new york": { lat: 40.7128, lng: -74.0060 },
  "jfk": { lat: 40.6413, lng: -73.7781 },
  "los angeles": { lat: 34.0522, lng: -118.2437 },
  "lax": { lat: 33.9416, lng: -118.4085 },
  "london": { lat: 51.5074, lng: -0.1278 },
  "paris": { lat: 48.8566, lng: 2.3522 },
};

const CarHomePage = () => {
  const [query, setQuery] = useState("");
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  const [rentals, setRentals] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return alert("Type a city or airport (e.g. New York or JFK)");
    setLoading(true);
    setError("");
    setRentals([]);
    setSelectedIndex(null);

    try {
      const dests = await searchDestinations(query);
      let latlng = null;
      if (dests && dests.length > 0) {
        const first = dests[0];
      
        latlng = {
          lat: Number(first.latitude ?? first.lat ?? first.location?.latitude),
          lng: Number(first.longitude ?? first.lon ?? first.location?.longitude),
        };
      }

      if (!latlng || !latlng.lat || !latlng.lng) {
       
        const key = query.trim().toLowerCase();
        if (knownCityFallbacks[key]) {
          latlng = knownCityFallbacks[key];
        }
      }

      if (!latlng || !latlng.lat || !latlng.lng) {
        setError("No location found for that query (Booking's destination API returned no data). Try 'New York' or 'JFK'.");
        setLoading(false);
        return;
      }

      setCenter({ lat: latlng.lat, lng: latlng.lng });

      const data = await searchCarRentals(latlng.lat, latlng.lng);
     
      if (!data || data.length === 0) {
        setError("No car rentals found.");
        setRentals([]);
      } else {
        setRentals(data);
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Error searching rentals. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    const r = rentals[index];
    if (r && (r.pickup_latitude || r.latitude || r.lat)) {
      setCenter({ lat: Number(r.pickup_latitude || r.latitude || r.lat), lng: Number(r.pickup_longitude || r.longitude || r.lng) });
    }
  };

  const viewDetails = async (index) => {
    const item = rentals[index];
    if (!item) return;
    setLoading(true);
    try {
      const details = await getVehicleDetails(item.id ?? item.vehicle_id ?? item.detailsKey, item.detailsKey ?? item.search_key ?? item.detailsKey);
      console.log("Details:", details);
      alert(`Details (check console):\n${JSON.stringify(details, null, 2)}`);
    } catch (err) {
      console.error(err);
      alert("Error fetching details - check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto py-28">
      <h1 className="text-2xl font-bold mb-4">Car Rentals</h1>

      <div className="flex gap-2 mb-4">
        <input type="text" placeholder="City (e.g. New York, JFK)" value={query} onChange={(e) => setQuery(e.target.value)} className="border px-3 py-2 rounded-md flex-1" />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Search</button>
      </div>

      {loading && <div className="mb-4 text-blue-900">Searching...</div>}
      {error && <div className="mb-4 text-red-600">{error}</div>}

      <CarMap rentals={rentals} center={center} onMarkerClick={(i) => handleSelect(i)} />

      <div className="mt-4 grid md:grid-cols-1 gap-4">
        <div>
          <div className="mb-2 flex justify-between items-center">
            <h2 className="font-semibold">Results</h2>
            <div className="text-sm text-gray-500">{rentals.length} items</div>
          </div>
          <CarList rentals={rentals} onSelect={(i) => { handleSelect(i); }} selectedIndex={selectedIndex} />
        </div>
      </div>
    </div>
  );
};

export default CarHomePage;
