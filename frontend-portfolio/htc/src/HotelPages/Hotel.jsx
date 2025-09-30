import Header from './Header'
import Map from './Map'
import List from './List'; 
// import { searchPlaces, getPlaceDetails, getPlacePhoto }  from "../API/HotelTravel";

const Hotel = () => {
 

  return (
    <div className='py-44 p-10'>
       <Header />
        <div className='grid grid-cols-2'>
          <List/>
          <Map  />
        </div>
      
    </div>
  )
}

export default Hotel