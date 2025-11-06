import "./App.css";
import "./index.css"
import { Navbar } from "./component/Navbar";
import HamburgerContextProvider from "./context/HamburgerContext";
import ToggleThemeContextProvider from "./context/ToggleThemeContext";
import Hero from "./Pages/Hero";

function App() {
  return (
    <>
      <ToggleThemeContextProvider>
        <HamburgerContextProvider>
        <Navbar/>
        <Hero/>
        </HamburgerContextProvider>
      </ToggleThemeContextProvider>
    </>
  );
}

export default App;
