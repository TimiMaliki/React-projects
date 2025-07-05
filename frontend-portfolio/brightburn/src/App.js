import './App.css';
import Navbar from './component/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Service';
import TrustSection from './pages/Trust';
import WhyUS from './pages/WhyUs';

function App() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Services/>
   <TrustSection/>
   <WhyUS/>
    </>
  );
}

export default App;
