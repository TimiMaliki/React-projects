import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

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

const Map = ({ setLocation, location, setBounds }) => {
  const defaultBounds = [
    [11.847676, 109.095887],
    [12.838442, 109.149359],
  ];

  return (
    <div className="h-[500px] rounded-4xl">
      <MapContainer
        center={[location?.lat || 12.2, location?.lng || 109.12]} 
        zoom={13}
        bounds={defaultBounds}
        style={{ width: "100%", height: "100%", borderRadius: "25px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mTPRPGuCqA0KSyBpMWUA"
        />

        {/* Marker at current location */}
        {location?.lat && location?.lng && (
          <Marker position={[location.lat, location.lng]}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {/* Track map bounds + location updates */}
        <MapEvents setBounds={setBounds} setLocation={setLocation} />
      </MapContainer>
    </div>
  );
};

export default Map;
