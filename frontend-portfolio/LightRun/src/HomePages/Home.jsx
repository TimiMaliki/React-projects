import About from "./about";
import Clients from "./client";
import Contact from "./contact";
import Hero from "./heroSection";
import Navbar from "../component/navbar";
import PricingSection from "./pricing";
import Services from "./services";
import Studio from "./studio";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Studio />
      <Services />
      <Clients/>
      <PricingSection/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
