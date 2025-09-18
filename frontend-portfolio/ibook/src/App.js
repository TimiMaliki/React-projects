import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
import "./App.css";
import Navbar from "./component/Navbar";

gsap.registerPlugin(ScrollTrigger , SplitText)

function App() {
 
  return (
    <>
 <Navbar/>
    </>
  );
}

export default App;
