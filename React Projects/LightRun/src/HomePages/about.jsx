import authorOne from "../images/authors-img/a-1.jpg";
import authorTwo from "../images/authors-img/a-2.jpg";
import authorThree from "../images/authors-img/a-3.jpg";
import authorFour from "../images/authors-img/a-4.jpg";

const About = () => {
  return (
    <div className="w-full">
    {/* Hero About Section */}
    <div className="relative py-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10"></div>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            We Fuel Blogging Revolutions
          </span>
        </h1>
        <p className="text-xl lg:text-2xl  max-w-4xl mx-auto leading-relaxed">
          At Light Run, we don't just build blogs - we <strong>ignite digital movements</strong>.
          Our platform transforms passionate writers into influential voices through
          cutting-edge strategy, technology, and community.
        </p>
      </div>
    </div>
  
    {/* Mission & Vision Section */}
    <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
      {/* Mission */}
      <div className="p-8 lg:p-12 rounded-3xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <p className="text-lg  mb-6">
          To democratize digital influence by giving every passionate writer the tools,
          strategy, and platform to build their blogging empire.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-purple-500 mr-3">✓</span>
            <span>Remove technical barriers to blogging success</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-3">✓</span>
            <span>Develop content systems that actually convert</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-3">✓</span>
            <span>Build communities around meaningful content</span>
          </li>
        </ul>
      </div>
  
      {/* Vision */}
      <div className="p-8 lg:p-12 rounded-3xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="bg-pink-100 p-3 rounded-full mr-4">
            <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Our Vision</h2>
        </div>
        <p className="text-lg mb-6">
          A world where quality content always finds its audience, where bloggers
          are properly compensated, and where authentic voices shape culture.
        </p>
        <div className="p-6 rounded-xl">
          <p className="font-medium  italic">
            "We measure our success by the number of bloggers who turn their passion
            into sustainable careers."
          </p>
        </div>
      </div>
    </div>
  
    {/* Team Section */}
    <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-boldmb-4">
          The Architects Behind Your Blogging Success
        </h2>
        <p className="text-xl  max-w-3xl mx-auto">
          Meet the strategists, technologists, and content wizards who make it happen
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team Member 1 */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-64 bg-gradient-to-r from-purple-400 to-pink-400 relative">
            <img 
              src={authorOne} 
              alt="Ethan Bennett" 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="p-6 mt-12 text-center">
            <h3 className="text-2xl font-bold">Ethan Bennett</h3>
            <p className="text-purple-600 font-medium mb-4">Tech Strategist</p>
            <p className="">
              Former Google engineer who builds bulletproof blog architectures
            </p>
          </div>
        </div>
  
        {/* Team Member 2 */}
        <div className=" rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-64 bg-gradient-to-r from-blue-400 to-teal-400 relative">
            <img 
              src={authorTwo} 
              alt="Sophia Hayes" 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="p-6 mt-12 text-center">
            <h3 className="text-2xl font-bold ">Sophia Hayes</h3>
            <p className="text-blue-600 font-medium mb-4">Growth Alchemist</p>
            <p className="">
              Turns blog posts into audience magnets with data-driven strategies
            </p>
          </div>
        </div>
  
        {/* Team Member 3 */}
        <div className=" rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-64 bg-gradient-to-r from-pink-400 to-red-400 relative">
            <img 
              src={authorThree} 
              alt="Aisha Johnson" 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="p-6 mt-12 text-center">
            <h3 className="text-2xl font-bold ">Aisha Johnson</h3>
            <p className="text-pink-600 font-medium mb-4">Content Architect</p>
            <p className="">
              Storytelling expert who crafts viral-worthy content frameworks
            </p>
          </div>
        </div>
  
        {/* Team Member 4 */}
        <div className=" rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-64 bg-gradient-to-r from-green-400 to-emerald-400 relative">
            <img 
              src={authorFour} 
              alt="Lucas Reed" 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="p-6 mt-12 text-center">
            <h3 className="text-2xl font-bold ">Lucas Reed</h3>
            <p className="text-green-600 font-medium mb-4">Monetization Guru</p>
            <p className="">
              Helps bloggers build 6-figure revenue streams from their content
            </p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  );
};

export default About;
