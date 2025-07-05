import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import AboutPage from './pages/About';
import Hero from './pages/Hero';
import Portfolio from './pages/Portfolio';
import PricingSection from './pages/Pricing';
import Services from './pages/Service';
import TrustSection from './pages/Trust';
import WhyUS from './pages/WhyUs';

function App() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Services/>
   <AboutPage/>
   <TrustSection/>
   <WhyUS/>
   <PricingSection/>
   <Portfolio/>
   <Footer/>
    </>
  );
}

export default App;
