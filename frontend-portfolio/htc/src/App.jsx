import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Hotel from "./HotelPages/Hotel";
import HomePage from "./component/HomePage";
import CarHomePage from "./CarPages/CarHomePage";
import FlightBooking from "./flightPages/FlightBooking";

function App() {
  const routes = createBrowserRouter([
    {
      element : <Layout/>,
      children : [
        {path : "/" , element : <HomePage/>},
         {path : "/hotel", element :<Hotel/>},
         {path : "/car", element :<CarHomePage/>},
         {path : "/flight", element :<FlightBooking/>}
      ]
    }
  ])
  return (
    <>
      <RouterProvider router ={routes} />
    </>
  );
}

export default App;
