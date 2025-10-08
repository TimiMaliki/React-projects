import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
