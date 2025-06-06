import Hero from "./heroSection";
import Navbar from "./navbar";
import Services from "./services";
import Studio from "./studio";



const Home = () => {
    return ( 
       
        <div >
      <Navbar/>
       <Hero/>
       <Studio/>
       <Services/>
        </div>
     );
}
 
export default Home;