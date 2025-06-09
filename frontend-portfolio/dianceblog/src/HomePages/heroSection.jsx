import heroImage from  "../images/hero0.jpg"
const Hero = () => {
  return (
    <div>
      <div className="w-full h-screen hero relative flex flex-col justify-center items-center">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white z-10 text-center px-5">
          "Every blog post is a stepping stone toward your masterpiece."
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white z-10 mt-4 text-center px-4">
          Your blog is your voice—loud, clear, and limitless.
        </h2>

        <div className="mt-6 z-10">
          <button
            type="button"
            className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-2 text-center"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
