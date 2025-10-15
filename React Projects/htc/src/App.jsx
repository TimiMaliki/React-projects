import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";

const Layout = lazy(() => import("./layout/Layout"));
const Hotel = lazy(() => import("./HotelPages/Hotel"));
const HomePage = lazy(() => import("./component/HomePage"));
const CarHomePage = lazy(() => import("./CarPages/CarHomePage"));
const FlightBooking = lazy(() => import("./flightPages/FlightBooking"));
const Auth = lazy(() => import("./AuthLayout/Auth"));
const SignIn = lazy(() => import("./LoginPage/SignIn"));
const Register = lazy(() => import("./LoginPage/Register"));

function App() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/hotel", element: <Hotel /> },
        { path: "/car", element: <CarHomePage /> },
        { path: "/flight", element: <FlightBooking /> },
      ],
    },
    {
      element: <Auth />,
      children: [
        { path: "/signin", element: <SignIn /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-lg text-white">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mr-3"></div>
        
        </div>
      }
    >
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
