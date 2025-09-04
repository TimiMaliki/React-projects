import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-yellow-50 py-20">
      <div className="container-xl lg:container m-auto px-6 text-center mt-10 md:mt-24">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 md:mb-6">
          Find Your <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Perfect Job</span> Today
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover opportunities that match your skills and schedule.  
          Your next career move is just a click away.
        </p>
        <div className="flex flex-row sm:flex-row items-center justify-center gap-4">
          <Link to={"/search"}>
          <div
            className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-8 py-2 md:py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore Remote Jobs
          </div>
          </Link>
          
          <Link to={"/add-job"} >
          <div
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900  px-3 md:px-8 py-2 md:py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Post a Job
          </div>
          </Link>
        </div>
      </div>

      {/* Decorative background accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Hero;
