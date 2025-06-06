import About from "./about";
import Clients from "./client";
import Contact from "./contact";
import Hero from "./heroSection";
import Navbar from "./navbar";
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
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
