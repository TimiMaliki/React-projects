import "./App.css";
import "./index.css"
import { Navbar } from "./component/Navbar";
import HamburgerContextProvider from "./context/HamburgerContext";
import ToggleThemeContextProvider from "./context/ToggleThemeContext";
import Hero from "./Pages/Hero";
import Intro from "./Pages/Intro";
import IntroSlice from "./Pages/IntroSlice";
import Memebers from "./Pages/Memebers";
import Subscribe from "./Pages/Subscribe";
import MerchSection from "./Pages/MerchSelection";

function App() {
  return (
    <>
      <ToggleThemeContextProvider>
        <HamburgerContextProvider>
        <Navbar/>
        <Hero/>
        <Intro/>
        <IntroSlice/>
        <Memebers/>
        <Subscribe/>
        <MerchSection/>
        </HamburgerContextProvider>
      </ToggleThemeContextProvider>
    </>
  );
}

export default App;
