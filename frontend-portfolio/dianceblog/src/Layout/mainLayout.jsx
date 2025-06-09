import { Outlet } from "react-router";
import Navbar from "../component/homeComponents/navbar";
import Footer from "../component/footer";

   
const MainLayout = () => {
    return (  
        <>
        <Navbar/>
         <Outlet/>
         <Footer/>
        </>
    );
}
 
export default MainLayout;