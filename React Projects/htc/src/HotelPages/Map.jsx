import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { Star } from "lucide-react";

// leaflet default icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// runs ONLY when the location prop changes — not on map drag
function Recenter({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center?.lat && center?.lng) {
      map.setView([center.lat, center.lng], 13, { animate: true }); 
    }
  }, [center]);

  return null;
}

// Capture map bounds and center when user moves or zooms
const MapEvents = ({ setBounds, setLocation }) => {
  useMapEvents({
    moveend: (e) => {
      const map = e.target;
      const b = map.getBounds();

      setBounds({
        ne: { lat: b.getNorthEast().lat, lng: b.getNorthEast().lng },
        sw: { lat: b.getSouthWest().lat, lng: b.getSouthWest().lng },
      });

      const c = map.getCenter();
      setLocation({ lat: c.lat, lng: c.lng });
    },
    zoomend: (e) => {
      const map = e.target;
      const b = map.getBounds();

      setBounds({
        ne: { lat: b.getNorthEast().lat, lng: b.getNorthEast().lng },
        sw: { lat: b.getSouthWest().lat, lng: b.getSouthWest().lng },
      });
    },
  });
  return null;
};

const Map = ({ location, setBounds, setLocation, places = [], setOnChildClicked }) => {
  const defaultCenter = { lat: location?.lat || 12.2, lng: location?.lng || 109.12 };
  const defaultBounds = [
    [11.847676, 109.095887],
    [12.838442, 109.149359],
  ];

  return (
    <div className="h-[500px] rounded-2xl overflow-hidden">
      <MapContainer
        center={[defaultCenter.lat, defaultCenter.lng]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
        bounds={defaultBounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Recenter only on search change */}
        <Recenter center={location} />

        {/*  bounds when user moves map */}
        <MapEvents setBounds={setBounds} setLocation={setLocation} />

        {/* Current search marker */}
        {location?.lat && location?.lng && (
          <Marker position={[location.lat, location.lng]}>
            <Popup>Search center</Popup>
          </Marker>
        )}

        {/* Place markers */}
        {places?.length > 0 &&
          places.map((place, i) => {
            const lat = Number(place.latitude || 0);
            const lng = Number(place.longitude || 0);
            if (!lat || !lng) return null;

            const img =
              place?.photo?.images?.large?.url ||
              place?.photo?.images?.medium?.url ||
              "https://via.placeholder.com/100";

            const iconHtml = `
              <div style="
                width:60px;height:60px;border-radius:10px;overflow:hidden;
                border:2px solid rgba(255,255,255,0.9);
                box-shadow:0 3px 8px rgba(0,0,0,0.25);
              ">
                <img src="${img}" style="width:100%;height:100%;object-fit:cover;" />
              </div>
            `;

            const customIcon = L.divIcon({
              html: iconHtml,
              className: "",
              iconSize: [60, 60],
              iconAnchor: [30, 60],
              popupAnchor: [0, -60],
            });

            return (
              <Marker
                key={place.location_id ?? i}
                position={[lat, lng]}
                icon={customIcon}
                eventHandlers={{
                  click: () => {
                    if (typeof setOnChildClicked === "function") setOnChildClicked(i);
                  },
                }}
              >
                <Popup>
                  <div className="w-56">
                    <img
                      src={img}
                      alt={place.name}
                      className="w-full h-28 object-cover rounded"
                    />
                    <div className="p-2">
                      <div className="font-semibold text-sm truncate">
                        {place.name || place.title}
                      </div>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            size={12}
                            className={
                              idx < Number(place.rating || 0)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-200"
                            }
                          />
                        ))}
                        <span className="text-xs text-black ml-2">
                          {place.num_reviews ? `${place.num_reviews} reviews` : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
};

export default Map;
