import clientImage from "../../images/client-logo-img/client-laura.jpg";
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

const Clients = () => {
  const firstLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const secondLogos = [logo7, logo8, logo9, logo10, logo11, logo12];
  return (
    <div className="w-full h-full mt-12">
      {/* Client Testimonial Section */}
      <div className="w-full grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-12">
        {/* Client Image */}
        <div className="client-image w-full">
          <img
            src={clientImage}
            alt="Client"
            className="w-full h-auto mx-auto object-contain rounded-xl"
          />
        </div>

        {/* Client Description */}
        <div className="card-one w-full h-full rounded-xl flex items-center justify-center text-center p-6">
          <p className="text-base lg:text-2xl font-semibold">
            At DIance-Blog, our client portfolio is more than just a collection
            of past projects — it's a reflection of our dedication to quality,
            creativity, and long-term results. We've had the privilege of
            working with a wide spectrum of clients, from agile startups seeking
            to make their mark, to well-established enterprises aiming to refine
            and elevate their digital presence. <br />
            <br />
            Each partnership begins with a deep understanding of our client’s
            vision, audience, and goals. From there, we craft tailored digital
            strategies that combine striking visuals with intentional user
            experience — strategies that don’t just look good, but actually
            perform. Whether it's designing a seamless UX/UI for a new platform,
            scaling a blog from scratch, or building brand visibility through
            data-driven content, our work is designed to inspire trust and drive
            measurable growth. <br />
            <br />
            Our blogs, in particular, are built not just to inform, but to
            convert. With careful attention to SEO, content architecture, and
            brand tone, we create blog experiences that engage readers and
            position our clients as leaders in their space. The end result? A
            digital presence that speaks volumes about the brand — with results
            to back it up.
          </p>
        </div>
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

export default Clients;
