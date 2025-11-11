import HamburgerContextProvider from "../context/HamburgerContext";
import ToggleThemeContextProvider from "../context/ToggleThemeContext";
import Hero from "../Pages/Hero";
import Intro from "../Pages/Intro";
import IntroSlice from "../Pages/IntroSlice";
import Memebers from "../Pages/Memebers";
import Subscribe from "../Pages/Subscribe";
import MerchSection from "../Pages/MerchSelection";

const HomePage = () => {
  return (
    <>
          <Hero />
          <Intro />
          <IntroSlice />
          <Memebers />
          <Subscribe />
          <MerchSection />
    </>
  );
};

export default HomePage;
