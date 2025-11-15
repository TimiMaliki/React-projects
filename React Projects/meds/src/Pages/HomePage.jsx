import Hero from "../Pages/Hero";
import Intro from "../Pages/Intro";
import IntroSlice from "../Pages/IntroSlice";
import Memebers from "../Pages/Memebers";
import Subscribe from "../Pages/Subscribe";
import MerchSection from "../Pages/MerchSelection";
import All from "../products/AllinOne/All";

const HomePage = () => {
  return (
    <>
          <Hero />
          <Intro />
          <IntroSlice />
          <All/>
          <Memebers />
          <Subscribe />
          <MerchSection />
    </>
  );
};

export default HomePage;
