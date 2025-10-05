import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const CarMap = ({ rentals = [], selectedIndex = null }) => {
 
  if (!Array.isArray(rentals) || rentals.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No cars found or invalid data.
      </div>
    );
  }

  const center = {
    lat: rentals[0]?.pickup_latitude ?? 40.7128, // fallback to NYC
    lng: rentals[0]?.pickup_longitude ?? -74.006,
  };

  return (
    <div className="h-[70vh] w-full rounded-lg overflow-hidden shadow">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={12}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {rentals.map((r, i) => {
          const lat = r.pickup_latitude || r.lat || r.location?.lat;
          const lng = r.pickup_longitude || r.lng || r.location?.lng;

          if (!lat || !lng) return null;

          return (
            <Marker key={i} position={[lat, lng]}>
              <Popup>
                <div className="text-center">
                  <img
                    src={r.image_url || r.photo || "https://via.placeholder.com/150x100"}
                    alt={r.vehicle_name}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <h3 className="font-semibold text-base">{r.vehicle_name}</h3>
                  <p className="text-sm text-gray-600">{r.vendor_name}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    {r.price?.amount_formatted ?? "Price not available"}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CarMap;
