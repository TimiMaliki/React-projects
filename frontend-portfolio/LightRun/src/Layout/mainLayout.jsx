import { Outlet } from "react-router";
import { ScrollRestoration } from 'react-router-dom';
import Navbar from "../component/navbar";
import Footer from "../component/footer";

   
const MainLayout = () => {
    return (  
        <div>
        <Navbar/>
         <Outlet/>
         <ScrollRestoration />
         <Footer/>
        </div>
    );
}
 
export default MainLayout;