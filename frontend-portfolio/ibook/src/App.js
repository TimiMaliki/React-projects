import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

gsap.registerPlugin(ScrollTrigger , SplitText)

function App() {
 
  return (
    <>
 <Navbar/>
 <Hero/>

    </>
  );
}

export default App;
