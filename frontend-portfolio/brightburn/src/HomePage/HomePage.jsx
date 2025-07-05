import AboutPage from '../pages/About';
import Contact from '../pages/Contact';
import Hero from '../pages/Hero';
import Portfolio from '../pages/Portfolio';
import PricingSection from '../pages/Pricing';
import Services from '../pages/Service';
import TrustSection from '../pages/Trust';
import WhyUS from '../pages/WhyUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutPage />
      <TrustSection />
      <WhyUS />
      <PricingSection />
      <Portfolio />
      <Contact/>
    </>
  );
};

export default HomePage;
