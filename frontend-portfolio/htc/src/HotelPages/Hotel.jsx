import Header from './Header'
import Map from './Map'
import List from './List'; 
import { fetchPlaces } from "../API/HotelTravel";
import { useEffect, useState } from 'react';

const Hotel = () => {
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState({});
  const [bounds, setBounds] = useState(null);
  const [onChildClick , setOnChildclicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setLocation({ lat: latitude, lng: longitude });
    });
  }, []); 

 
  useEffect(() => {
    setIsLoading(true)
    if (bounds?.sw && bounds?.ne) {   
      fetchPlaces(bounds.sw, bounds.ne)
        .then((data) => {
          console.log("Fetched Places:", data);
          setPlaces(data);
          setIsLoading(false)
        })
        .catch((err) => console.error("Error fetching places:", err));
    }
  }, [bounds]); 

  return (
    <div className="py-28 p-10">
    <Header />
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full h-full">
        <List 
        places={places}
        onChildClick ={onChildClick }
        isLoading={isLoading}
        />
      </div>
      <Map
        setBounds={setBounds}
        setLocation={setLocation}
        location={location}
        places={places}
        setOnChildclicked = {setOnChildclicked}
      />
    </div>
  </div>
  
  )
}

export default Hotel;
