import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Star } from "lucide-react";
import "leaflet/dist/leaflet.css";

// Custom marker icon (Leaflet requires explicit icon)
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const Map = ({ coords, places, weatherData }) => {
  if (!coords || coords.lat === undefined || coords.lng === undefined) {
    return (
      <div className="h-[85vh] w-full flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  return (
    <div className="h-[85vh] w-full">
      <MapContainer
        center={[coords.lat, coords.lng]}
        zoom={14}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        {/* Free OpenStreetMap tiles */}
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Places */}
        {places.length > 0 &&
          places.map((place, i) => (
            <Marker
              key={i}
              position={[Number(place.latitude), Number(place.longitude)]}
              icon={customIcon}
            >
              <Popup>
                <div className="w-[150px]">
                  <p className="font-semibold text-sm truncate">{place.name}</p>
                  <img
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                    className="rounded mt-1"
                  />
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-3 h-3 ${
                          idx < Number(place.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

        {/* Weather icons */}
        {weatherData?.list?.length > 0 &&
          weatherData.list.map((data, i) => (
            <Marker
              key={i}
              position={[data.coord.lat, data.coord.lon]}
              icon={new L.Icon({
                iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                iconSize: [50, 50],
              })}
            />
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
