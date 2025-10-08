import About from "./about";
import Clients from "./client";
import Contact from "./contact";
import Hero from "./heroSection";
import PricingSection from "./pricing";
import Services from "./services";
import Studio from "./studio";

const Home = () => {
  return (
    <>
      <Hero />
      <Studio />
      <Services />
      <Clients/>
      <PricingSection/>
      <About/>
      <Contact/>
    </>
  );
};

export default Home;
