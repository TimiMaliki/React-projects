import React, { useState, useEffect } from 'react'
import Header from './Header'
import Map from './Map'
import List from './List';

const Hotel = () => {
  const [coords, setCoords] = useState({ lat: 40.7128, lng: -74.006 }); 

  useEffect(() => {
   
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      () => {
        console.warn("User denied geolocation, using fallback (NYC).");
      }
    );
  }, []);
  return (
    <div className='py-44'>
        <Header/>
        <div className='grid grid-cols-2'>
          <List/>
        <Map coords={coords} places={[]} weatherData={null} />
        </div>
      
    </div>
  )
}

export default Hotel