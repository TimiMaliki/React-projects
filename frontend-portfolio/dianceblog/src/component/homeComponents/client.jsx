import clientImage from "../../images/client-logo-img/client-laura.jpg";
import Logos from "./logos";

const Clients = () => {
 
  return (
    <div className="w-full h-full mt-12">
      {/* Client Testimonial Section large screen */}
      <div className="w-full hidden lg:grid  lg:grid-cols-2 gap-8 items-center p-6 lg:p-12">
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

       {/* Client Testimonial Section small screen */}
       <div className="w-full lg:hidden grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-12">
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

         {/* Client Image */}
         <div className="client-image w-full">
          <img
            src={clientImage}
            alt="Client"
            className="w-full h-auto mx-auto object-contain rounded-3xl shadow-xl"
          />
        </div>
      </div> 
     <Logos/>
    </div>
  );
};

export default Clients;
