import { Outlet, ScrollRestoration } from "react-router-dom";
import HamburgerContextProvider from "../context/HamburgerContext";
import ToggleThemeContextProvider from "../context/ToggleThemeContext";
import{ Navbar } from "../component/Navbar";
import Footer from "../component/Footer";
import CartContextProvider from "../context/CartContext";
const MainLayout = () => {
  return (
    <>
       <CartContextProvider>
     <ToggleThemeContextProvider>
        <HamburgerContextProvider>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
      </HamburgerContextProvider>
      </ToggleThemeContextProvider>
        </CartContextProvider>
    </>
  );
};

export default MainLayout;
