import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
import "./App.css";

gsap.registerPlugin(ScrollTrigger , SplitText)

function App() {
 
  return (
    <div className="App h-[3000px]">
 hello word
    </div>
  );
}

export default App;
