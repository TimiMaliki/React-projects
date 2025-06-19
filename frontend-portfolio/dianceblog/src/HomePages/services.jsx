import cardOne from "../images/social-audience.jpg"
import cardTwo from "../images/analytic.jpg"
import cardThree from "../images/scratch.jpg"
import cardFour from "../images/strategy.jpg"


const Services = () => {
    return ( 
<div className="w-full bg-gradient-to-b  to-purple-50 py-16 px-4 lg:px-12">
  {/* Header Section - More Impactful */}
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Your Growth, <span className="italic">Supercharged</span>
      </span>
    </h1>
    <p className="text-lg lg:text-xl  max-w-3xl mx-auto">
      Diance-Blog isn’t just services—it’s your <strong>shortcut to influence</strong>.  
      We turn creators into authorities and blogs into empires.
    </p>
  </div>

  {/* Services Grid - Visual & Persuasive */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Card 1 - Audience Growth */}
    <div className=" p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
      <div className="flex items-center justify-center mb-6">
        <img src={cardOne} alt="Rocket" className="w-full h-44 object-contain rounded-2xl" />
      </div>
      <h3 className="text-2xl font-bold mb-3 ">
        Audience <span className="text-purple-600">Explosion</span>
      </h3>
      <p className=" mb-4">
        Go from ignored to <strong>irresistible</strong>. We amplify your reach across YouTube, TikTok, and Instagram with strategies that actually convert.
      </p>
      <button className="text-purple-600 font-semibold text-sm hover:underline">
        Get noticed →
      </button>
    </div>

    {/* Card 2 - Analytics */}
    <div className=" p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
      <div className="flex items-center justify-center mb-6">
        <img src={cardTwo} alt="Analytics" className="w-full h-44 object-contain rounded-2xl"/>
      </div>
      <h3 className="text-2xl font-bold mb-3 ">
        Data That <span className="text-pink-600">Decodes</span>
      </h3>
      <p className=" mb-4">
        No more guessing. We track, analyze, and <strong>translate</strong> your metrics into clear, profit-driving actions.
      </p>
      <button className="text-pink-600 font-semibold text-sm hover:underline">
        See the numbers →
      </button>
    </div>

    {/* Card 3 - Blog Growth */}
    <div className=" p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
      <div className="flex items-center justify-center mb-6">
        <img src={cardThree} alt="Blog" className="w-full h-44 object-contain rounded-2xl" />
      </div>
      <h3 className="text-2xl font-bold mb-3 ">
        Blogs That <span className="text-blue-600">Dominate</span>
      </h3>
      <p className=" mb-4">
        From zero to <strong>industry leader</strong>. We handle niche research, SEO, and monetization so you can focus on creating.
      </p>
      <button className="text-blue-600 font-semibold text-sm hover:underline">
        Launch yours →
      </button>
    </div>

    {/* Card 4 - Brand Strategy */}
    <div className=" p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
      <div className="flex items-center justify-center mb-6">
        <img src={cardFour} alt="Strategy" className="w-full h-44 object-contain rounded-2xl" />
      </div>
      <h3 className="text-2xl font-bold mb-3 ">
        Strategy With <span className="text-green-600">Teeth</span>
      </h3>
      <p className=" mb-4">
        Your brand isn’t “just another” creator. We craft <strong>unforgettable</strong> identities and content systems that demand attention.
      </p>
      <button className="text-green-600 font-semibold text-sm hover:underline">
        Stand out →
      </button>
    </div>
  </div>

  {/* CTA Banner */}
  <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-8 lg:p-12 text-center">
    <h3 className="text-2xl lg:text-3xl font-bold  mb-4">
      Ready to <span className="italic">own</span> your niche?
    </h3>
    <p className=" mb-6 max-w-2xl mx-auto">
      Stop wishing for growth—start engineering it. Book your free audit today.
    </p>
    <button className=" text-purple-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
      Claim Your Free Strategy Call
    </button>
  </div>
</div>

     );
}
 
export default Services;