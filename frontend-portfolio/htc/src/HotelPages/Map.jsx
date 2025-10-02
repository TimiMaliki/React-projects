import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { Star } from "lucide-react";

const MapEvents = ({ setBounds, setLocation }) => {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      setBounds({
        ne: { lat: bounds.getNorthEast().lat, lng: bounds.getNorthEast().lng },
        sw: { lat: bounds.getSouthWest().lat, lng: bounds.getSouthWest().lng },
      });

      const center = map.getCenter();
      setLocation({ lat: center.lat, lng: center.lng });
    },
  });
  return null;
};

const Map = ({ setLocation, location, setBounds, places, setOnChildclicked }) => {
  const defaultBounds = [
    [11.847676, 109.095887],
    [12.838442, 109.149359],
  ];

  return (
    <div className="h-[500px] rounded-3xl overflow-hidden">
      <MapContainer
        center={[location?.lat || 12.2, location?.lng || 109.12]}
        zoom={13}
        bounds={defaultBounds}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mTPRPGuCqA0KSyBpMWUA"
        />

        {/* Show user location marker */}
        {location?.lat && location?.lng && (
          <Marker position={[location.lat, location.lng]}>
            <Popup>
              <span className="font-medium text-blue-600">You are here</span>
            </Popup>
          </Marker>
        )}

        {/* Places */}
        {places?.length > 0 &&
          places.map((place, i) => {
            const icon = L.divIcon({
              className: "custom-marker",
              html: `
                <div style="
                  width: 100px;
                  height: 100px;
                  border-radius: 9px;
                  overflow: hidden;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                ">
                  <img src="${
                    place?.photo?.images?.large?.url ??
                    "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
              `,
              iconSize: [100, 100],
              iconAnchor: [25, 25],
              popupAnchor: [0, -20],
            });

            return (
              <Marker
                key={i}
                position={[Number(place.latitude), Number(place.longitude)]}
                icon={icon}
                eventHandlers={{
                  click: () => setOnChildclicked(i), // ✅ proper marker click
                }}
              >
                <Popup>
                  <div className="w-48 bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={
                        place?.photo?.images?.large?.url ??
                        "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                      }
                      alt={place.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-2">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">
                        {place.name}
                      </h3>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}

        <MapEvents setBounds={setBounds} setLocation={setLocation} />
      </MapContainer>
    </div>
  );
};

export default Map;
