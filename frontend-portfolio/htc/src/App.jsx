import "./App.css";
import About from "./component/About";
import BookingServices from "./component/BookingServices";
import Books from "./component/Books";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Movies from "./component/Movies";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Books />
      <About />
      <Movies />
      <BookingServices />
      <Contact />
    </>
  );
}

export default App;
