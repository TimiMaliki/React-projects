import { Outlet } from "react-router";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

   
const MainLayout = () => {
    return (  
        <div>
        <Navbar/>
         <Outlet/>
         <Footer/>
        </div>
    );
}
 
export default MainLayout;