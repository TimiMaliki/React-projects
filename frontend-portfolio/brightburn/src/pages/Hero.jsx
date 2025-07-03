import computer from "../images/c1.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-light">
      <img
        src={computer}
        alt="Web Design"
        className="w-full h-full  object-cover rounded-3xl rounded-t-none"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div> */}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 text-white max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Websites That <span className="text-red-500">Wow</span> Your Audience
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          From sleek single-page sites to full-featured eCommerce platforms — we
          build websites that look great, load fast, and grow your business.
        </p>
        <a
          href="#contact"
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-3 rounded-full w-fit font-semibold text-lg shadow-md"
        >
          Get Your Website Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
