import clientImage from "../images/client-logo-img/client-laura.jpg";
import Headers from "./header";
import Logos from "./logos";

const Clients = () => {
  return (
    <div className="w-full bg-gradient-to-b  to-purple-50 py-16 px-4 lg:px-12">
    
    <div className="max-w-6xl mx-auto text-center mb-16">
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Our Vision: <span className="italic">Blogging Without Limits</span>
        </span>
      </h1>
      <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
        We see a world where every blogger's voice finds its audience - 
        where great content meets strategic growth.
      </p>
    </div>
  
   
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative group">
        <img
          src={clientImage}
          alt="Successful blogger collaboration"
          className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform"
        />
        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
          <p className="font-bold text-purple-600">"Our bloggers saw 300% growth in 6 months"</p>
        </div>
      </div>
  
    
      <div className="space-y-8">
        <div className="p-6  rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            <span className="text-purple-600">Empowering</span> Every Voice
          </h3>
          <p className="">
            At Diance-Blog, we don't just build blogs - we <strong>launch movements</strong>. 
            Whether you're a passionate beginner or established creator, we give you the tools to:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✓</span>
              <span>Turn ideas into influential platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✓</span>
              <span>Develop content that actually converts</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✓</span>
              <span>Build audiences that engage and grow</span>
            </li>
          </ul>
        </div>
  
        <div className="p-6  rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            <span className="text-blue-600">Proven</span> Blogging Science
          </h3>
          <p className="text-gray-700">
            Our methodology combines <strong>data-driven strategy</strong> with authentic storytelling:
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="font-semibold text-purple-700">SEO That Works</p>
            </div>
            <div className="bg-pink-50 p-3 rounded-lg">
              <p className="font-semibold text-pink-700">Audience Building</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-semibold text-blue-700">Content Systems</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-semibold text-green-700">Monetization</p>
            </div>
          </div>
        </div>
  
        <button className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity text-lg">
          See Our Blog Success Stories
        </button>
      </div>
    </div>
  
   
    <div className="mt-20">
      <Logos />
    </div>
  </div>
  );
};

export default Clients;
