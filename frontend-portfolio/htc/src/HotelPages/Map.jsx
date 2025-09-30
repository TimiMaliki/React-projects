import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [51.505, -0.09];

  return (
    <div className="h-[500px] rounded-4xl"> 
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ width: "100%", height: "100%" , borderRadius : "25px" }} 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mTPRPGuCqA0KSyBpMWUA"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

