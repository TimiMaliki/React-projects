import { useEffect } from "react";
import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import introLeft from "../Images/left-intro.webp";
import introRight from "../Images/right-intro.png";
import { Link } from "react-router-dom";


const Intro = () => {
    const {isLight, dark, light } = useContext(ToggleThemeContext);
      const themeStyle = isLight ? light : dark;

    useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
    easing: "ease-in-out", 
  });
}, []);


  return (
    <section className="relative  w-full h-full py-20 grid md:flex items-center md:justify-center bg-white overflow-hidden" style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>
      {/* Left Decorative Image */}
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        data-aos="fade-right"
      >
        <img
          src={introLeft}
          alt="Intro Decoration Left"
          className="w-20 sm:w-[200px] lg:w-[250px] object-contain rotate-[-20deg] drop-shadow-2xl"
        />
      </div>

      {/* Center Text */}
      <div className="text-center px-4 md:px-8 z-20 -mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight  space-y-3">
          <div data-aos="fade-up" data-aos-delay="100">
            INTRODUCING
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            THE 3RD GENERATION
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            ALL-IN-ONE DEVICES
          </div>
        </h1>

        <p
          className="mt-6 text-lg sm:text-lg md:text-xl max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Experience innovation and performance redefined with our next-generation
          all-in-one devices — designed for convenience, style, and superior power.
        </p>

        <div className="mt-8" data-aos="zoom-in" data-aos-delay="700">
           <Link to={"/products"}>
          <div
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            SHOP NOW
          </div>
          </Link>
        </div>
      </div>

      {/* Right Decorative Image */}
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        data-aos="fade-left"
      >
        <img
          src={introRight}
          alt="Intro Decoration Right"
          className="w-20 sm:w-[200px] lg:w-[250px] object-contain rotate-25 drop-shadow-2xl"
        />
      </div>
    </section>
  );
};



export default Intro