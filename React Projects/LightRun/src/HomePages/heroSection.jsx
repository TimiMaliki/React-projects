import { Link } from "react-router";
import heroImage from  "../images/hero0.jpg"
const Hero = () => {
  return (
    <div className="w-full h-screen hero relative flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm">
    <img
      src={heroImage}
      alt="A blogger creating content"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    
    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white z-10 text-center px-5 leading-tight">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        "Turn Your Blog Into a Movement."
      </span>
    </h1>
  
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white z-10 mt-6 text-center px-4 max-w-3xl ">
      We don’t just build blogs—we <span className="font-bold">ignite audiences</span>.  
      From setup to stardom, your voice deserves to be heard.
    </h2>
 <Link to ="/signUp">
    <div className="mt-8 z-10 flex gap-4">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 font-bold rounded-full text-sm md:text-base px-4 py-2 lg:px-8 lg:py-3 text-center transition-all hover:scale-105 shadow-lg"
      >
        Launch Your Blog →
      </button>
      <button
        type="button"
        className="text-white border-2 border-white hover:bg-white/10 font-medium rounded-full text-sm md:text-base px-4 py-2 lg:px-8 lg:py-3 text-center transition-all"
      >
        Grow Your Audience
      </button>
    </div>
    </Link>
  
    <p className="text-white/80 text-lg mt-10 z-10 font-bold">
      Trusted by 500+ bloggers worldwide
    </p>
  </div>
  );
};

export default Hero;
