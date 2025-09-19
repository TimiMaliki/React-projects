import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import RoadTrip from "./component/RoadTrip";
import About from "./component/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RoadTrip />
      <About/>
    </>
  );
}

export default App;
