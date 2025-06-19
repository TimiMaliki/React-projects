import logo1 from "../images/client-logo-img/logo1.svg";
import logo2 from "../images/client-logo-img/logo2.svg";
import logo3 from "../images/client-logo-img/logo3.svg";
import logo4 from "../images/client-logo-img/logo4.svg";
import logo5 from "../images/client-logo-img/logo5.svg";
import logo6 from "../images/client-logo-img/logo6.svg";
import logo7 from "../images/client-logo-img/logo7.svg";
import logo8 from "../images/client-logo-img/logo8.svg";
import logo9 from "../images/client-logo-img/logo9.svg";
import logo10 from "../images/client-logo-img/logo10.svg";
import logo11 from "../images/client-logo-img/logo11.svg";
import logo12 from "../images/client-logo-img/logo12.svg";
import Headers from "./header";

const Logos = () => {
  const firstLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const secondLogos = [logo7, logo8, logo9, logo10, logo11, logo12];
  return (
    <div className="w-full bg-gradient-to-b  to-gray-50 py-16 px-4 lg:px-12">
    {/* Header with Impact */}
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
        <span className="bg-clip-text bg-gradient-to-r ">
          Trusted By Industry Leaders
        </span>
      </h1>
      <p className="text-lg lg:text-xl  max-w-3xl mx-auto">
        We collaborate with visionary brands to empower bloggers worldwide
      </p>
    </div>
  
    {/* Logos Grid - Enhanced Design */}
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Premium Partners Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-center  uppercase tracking-wider">
          Strategic Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4">
          {firstLogos.map((logo) => (
            <div 
              key={logo} 
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={logo}
                alt="Premium partner logo"
                className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
  
      {/* Technology Partners Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-center  uppercase tracking-wider">
          Technology Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4">
          {secondLogos.map((logo) => (
            <div 
              key={logo} 
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={logo}
                alt="Technology partner logo"
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  
    {/* CTA Section */}
    <div className="max-w-4xl mx-auto mt-20 text-center">
      <h3 className="text-2xl lg:text-3xl font-bold  mb-4">
        Want to join our partner network?
      </h3>
      <p className="mb-6 max-w-2xl mx-auto">
        Collaborate with us to reach thousands of ambitious bloggers and content creators.
      </p>
      <button className=" text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
        Become a Partner
      </button>
    </div>
  </div>
  );
};

export default Logos;
