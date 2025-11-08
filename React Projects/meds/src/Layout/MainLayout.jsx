import { Outlet, ScrollRestoration } from "react-router-dom";
import HamburgerContextProvider from "../context/HamburgerContext";
import ToggleThemeContextProvider from "../context/ToggleThemeContext";
import{ Navbar } from "../component/Navbar";
import Footer from "../component/Footer";
const MainLayout = () => {
  return (
    <>
     <ToggleThemeContextProvider>
        <HamburgerContextProvider>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
      </HamburgerContextProvider>
      </ToggleThemeContextProvider>
    </>
  );
};

export default MainLayout;
