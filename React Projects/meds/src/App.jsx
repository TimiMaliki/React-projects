import "./App.css";
import { Navbar } from "./component/Navbar";
import Testing from "./component/Testing";
import HamburgerContextProvider from "./context/HamburgerContext";
import ToggleThemeContextProvider from "./context/ToggleThemeContext";

function App() {
  return (
    <>
      <ToggleThemeContextProvider>
        <HamburgerContextProvider>
        <Navbar/>
        <Testing/>
        </HamburgerContextProvider>
      </ToggleThemeContextProvider>
    </>
  );
}

export default App;
