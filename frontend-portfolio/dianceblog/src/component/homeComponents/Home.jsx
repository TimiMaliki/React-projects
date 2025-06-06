import Clients from "./client";
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
    </div>
  );
};

export default Home;
