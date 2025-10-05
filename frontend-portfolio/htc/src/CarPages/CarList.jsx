import React, { useEffect, useState, createRef } from "react";
import car from "../images/cars.jpg"
const CarList = ({ rentals = [], onSelect, selectedIndex }) => {
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    setRefs((r) => Array(rentals.length).fill().map((_, i) => r[i] || createRef()));
  }, [rentals]);

  useEffect(() => {
    if (typeof selectedIndex === "number" && refs[selectedIndex]) {
      refs[selectedIndex].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedIndex, refs]);

  if (!rentals || rentals.length === 0) {
    return <div className="p-4 text-center text-gray-500">No cars found.</div>;
  }

 
  const getImageUrl = (r) => {
    return (
      r.image_url ||
      r.photo ||
      r.image ||
      r.picture ||
      r.thumbnail ||
      r.car_image ||
      r?.images?.[0]?.url ||
      r?.photos?.[0]?.url ||
      "https://via.placeholder.com/120x80?text=No+Image",
      r.image || car
    );
  };

  return (
    <div className="max-h-[70vh] overflow-y-auto space-y-3 p-2">
      {rentals.map((r, i) => (
        <div
          key={r.id ?? i}
          ref={refs[i]}
          className={`border rounded-lg p-3 bg-white shadow-sm transition hover:shadow-md ${
            selectedIndex === i ? "ring-2 ring-red-400" : ""
          }`}
        >
          <div className="flex gap-3 items-start">
            <img
              src={getImageUrl(r)}
              alt={r.vehicle_name || "Car"}
              className="w-28 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{r.vehicle_name || "Unnamed Car"}</h3>
                <div className="text-sm text-black">
                  {r.price?.amount_formatted ??
                    r.price?.price_total ??
                    "N/A"}
                </div>
              </div>
              <p className="text-sm text-black">{r.vendor_name || "Unknown Vendor"}</p>
              <p className="text-sm text-black mt-2">{r.car_class || ""}</p>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => onSelect(i)}
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded"
                >
                  View on map
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
