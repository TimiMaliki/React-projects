import heroImg from "../Images/hero-Img.webp";


const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-light overflow-x-hidden"
      id="home"
    >
      <img
        src={heroImg}
        alt="Web Design"
        className="w-full h-full  rounded-3xl rounded-t-none"
      />
      <div className="absolute top-44 left-3 right-3 md:left-6 md:right-6 lg:left-10 lg:right-auto">
        <div className="bg-transparent rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 text-white">
            NEW ALL-IN-ONE <br />
            <span className="text-red-700">GEN 3</span> DEVICE
          </h1>
          <a
            href="https://wa.me/qr/RJYG6ACYJUUGB1"
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-md inline-block"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
