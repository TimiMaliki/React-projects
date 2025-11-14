import "./App.css";
import "./index.css";
import MainLayout from "../src/Layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import All from "./products/AllinOne/All";
import Cartridges from "./products/Cartridges/Cartridges";
import FlowerSection from "./products/Flowers/Flower";
import PreRollsSection from "./products/PreRoll/PreRoll";
import ConcentrateSection from "./products/Concentrate/concentrate";
import GummiesSection from "./products/Gummies/Gummies";
import CartridgesID from "./ProductID/CatridgesID";
import CartPage from "./CartPage/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { element: <HomePage />, path: "/" },
        { element: <About />, path: "/about" },
        { element: <Products />, path: "/products" },
        { element: <All />, path: "/all" },
        { element: <Cartridges />, path: "/cartridges" },
        { element: <FlowerSection />, path: "/flower" },
        { element: <PreRollsSection />, path: "/infused" },
        { element: <ConcentrateSection />, path: "/concentrates" },
        { element: <GummiesSection />, path: "/gummies" },
         { element: <CartPage/>, path: "/cartpage" },
      
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
