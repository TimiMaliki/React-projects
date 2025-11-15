import { Link } from "react-router-dom";
import heroImg from "../Images/hero-Img.webp";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
      id="home"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Web Design"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

    
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-10 lg:px-16">
        <div className="bg-transparent rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            NEW ALL-IN-ONE <br />
            <span className="text-red-600">GEN 3</span> DEVICE
          </h1>
          <Link to={"/products"}>
            <div
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-md inline-block"
            >
              SHOP NOW
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
