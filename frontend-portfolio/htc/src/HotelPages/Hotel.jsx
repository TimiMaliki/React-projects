import React, { useEffect, useRef, useState } from "react";
import Header from "../HotelPages/Header";
import List from "../HotelPages/List";
import Map from "../HotelPages/Map";
import { fetchPlaces } from "../API/HotelTravel";

const Hotel = () => {
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState(null); // {lat,lng}
  const [bounds, setBounds] = useState(null);     // { sw: {lat,lng}, ne: {lat,lng} }
  const [onChildClick, setOnChildClick] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const fetchTimer = useRef(null);

  // Get user's current location once (optional)
  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      ({ coords }) => setLocation({ lat: coords.latitude, lng: coords.longitude }),
      () => {}, // ignore error
      { enableHighAccuracy: false }
    );
  }, []);

  // Compute a small bounding box around the center
  const computeBoundsFromCenter = (lat, lng, delta = 0.05) => ({
    sw: { lat: lat - delta, lng: lng - delta },
    ne: { lat: lat + delta, lng: lng + delta },
  });

  // Called when user selects a place from search
  const handleSearchSelect = (place) => {
    const newLoc = { lat: place.lat, lng: place.lng };
    setLocation(newLoc);

    const newBounds = computeBoundsFromCenter(place.lat, place.lng, 0.06);
    setBounds(newBounds);
  };

  // Fetch places whenever bounds/type/rating changes
  useEffect(() => {
    if (!bounds?.sw || !bounds?.ne) return;

    clearTimeout(fetchTimer.current);
    fetchTimer.current = setTimeout(() => {
      setIsLoading(true);
      fetchPlaces(type, bounds.sw, bounds.ne, rating)
        .then((data) => {
          setPlaces(data || []);
        })
        .catch((err) => console.error("Error fetching places:", err))
        .finally(() => setIsLoading(false));
    }, 800); // debounce
    return () => clearTimeout(fetchTimer.current);
  }, [bounds, type, rating]);

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <Header onSearchSelect={handleSearchSelect} />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <List
          places={places}
          onChildClick={onChildClick}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />

        <Map
          location={location}
          setBounds={setBounds}
          setLocation={setLocation}
          places={places}
          setOnChildClicked={setOnChildClick}
        />
      </div>
    </div>
  );
};

export default Hotel;
