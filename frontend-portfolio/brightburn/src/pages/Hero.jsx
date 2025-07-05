import computer from "../images/web3.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-light">
      {/* Background Image */}
      <img
        src={computer}
        alt="Web Design"
        className="w-full h-full object-cover rounded-3xl rounded-t-none"
      />

      {/* Content */}
      <div className="absolute bottom-10 left-4 right-4 md:left-8 md:right-8 lg:left-10 lg:right-auto">
        <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg max-w-full md:max-w-xl lg:max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight mb-4 md:mb-6 text-black">
            Websites That <span className="text-red-700">Wow</span> Your Audience
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold mb-6 text-gray-800">
            From sleek single-page sites to full-featured eCommerce platforms — we
            build websites that look great, load fast, and grow your business.
          </p>
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-5 py-3 rounded-full font-semibold text-base md:text-lg shadow-md inline-block"
          >
            Get Your Website Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
