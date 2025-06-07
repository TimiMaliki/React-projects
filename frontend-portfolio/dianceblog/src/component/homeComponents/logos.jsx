import logo1 from "../../images/client-logo-img/logo1.svg";
import logo2 from "../../images/client-logo-img/logo2.svg";
import logo3 from "../../images/client-logo-img/logo3.svg";
import logo4 from "../../images/client-logo-img/logo4.svg";
import logo5 from "../../images/client-logo-img/logo5.svg";
import logo6 from "../../images/client-logo-img/logo6.svg";
import logo7 from "../../images/client-logo-img/logo7.svg";
import logo8 from "../../images/client-logo-img/logo8.svg";
import logo9 from "../../images/client-logo-img/logo9.svg";
import logo10 from "../../images/client-logo-img/logo10.svg";
import logo11 from "../../images/client-logo-img/logo11.svg";
import logo12 from "../../images/client-logo-img/logo12.svg";
import Headers from "./header";

const Logos = () => {
  const firstLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const secondLogos = [logo7, logo8, logo9, logo10, logo11, logo12];
  return (
    <div className="logo w-full h-full mt-4 bg-white text-black">
      <div className="flex justify-center text-center">
        <h1 className="text-4xl text-black text-center lg:text-7xl font-extrabold mb-5">
          <Headers title={"Our Sponsors & Partner"} />
        </h1>
      </div>
      {/* Logos Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 lg:px-12 pb-12">
        {firstLogos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center p-4">
            <img
              src={logo}
              alt="Client logo"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 lg:px-12 pb-12">
        {secondLogos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center p-4">
            <img
              src={logo}
              alt="Client logo"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
