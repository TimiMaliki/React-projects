import { Outlet, ScrollRestoration } from "react-router-dom";
import HamburgerContextProvider from "../context/HamburgerContext";
import ToggleThemeContextProvider from "../context/ToggleThemeContext";
import{ Navbar } from "../component/Navbar";
import Footer from "../component/Footer";
import CartContextProvider from "../context/CartContext";
const MainLayout = () => {
  return (
    <>
     <ToggleThemeContextProvider>
        <HamburgerContextProvider>
        <CartContextProvider>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
      </CartContextProvider>
      </HamburgerContextProvider>
      </ToggleThemeContextProvider>
    </>
  );
};

export default MainLayout;
