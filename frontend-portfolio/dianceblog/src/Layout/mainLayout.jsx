import { Outlet } from "react-router";
import Navbar from "../component/navbar";
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