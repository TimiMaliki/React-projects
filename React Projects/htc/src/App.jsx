import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Hotel from "./HotelPages/Hotel";
import HomePage from "./component/HomePage";
import CarHomePage from "./CarPages/CarHomePage";
import FlightBooking from "./flightPages/FlightBooking";
import Auth from "./AuthLayout/Auth";
import SignIn from "./LoginPage/SignIn";
import Register from "./LoginPage/Register";

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
    },{
      element : <Auth/>,
      children : [
        {path : "signin" , element : <SignIn/>},
        {path : "register", element : <Register/>}
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
