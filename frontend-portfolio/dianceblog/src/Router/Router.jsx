import {Route, Routes} from "react-router"
import MainLayout from "../Layout/mainLayout";
import Home from "../component/homeComponents/Home";
const Router = () => {
    return ( 
        <div>
            <Routes>
             <Route path="" element={<MainLayout/>}>
               <Route index element={<Home/>} />
             </Route>
            </Routes>
        </div>
     );
}
 
export default Router;