const Studio = () => {
  return (
    <section className="w-full h-full bg-gradient-to-br  py-12 lg:py-20 px-4 lg:px-12">
  
  <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    

    <div className="lg:col-span-2 flex flex-col justify-center p-6 lg:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Don’t Just Blog—<span className="italic">Dominate.</span>
      </h1>
      <p className="mt-6 text-lg lg:text-xl ">
        Diance-Blog isn’t just a service—it’s your <strong>secret weapon</strong>.  
        We turn ideas into empires, one post at a time.
      </p>
    </div>

    <div className="flex flex-col justify-center items-center p-6 bg-black rounded-xl text-white hover:scale-[1.02] transition-transform">
      <h2 className="text-2xl lg:text-3xl font-bold text-center">
        Why <span className="text-pink-400">Diance-Blog?</span>
      </h2>
      <p className="mt-4 text-sm lg:text-base text-gray-300 text-center">
        Because generic platforms won’t make you unforgettable.
      </p>
    </div>

    <div className="lg:col-span-3 p-8 lg:p-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            We’re <span className="text-purple-600">obsessed</span> with your growth.
          </h3>
          <p className="text-gray-700">
            Diance-Blog isn’t just about building blogs—it’s about crafting <strong>audience magnets</strong>. 
            Whether you’re a solo creator or a scaling brand, we design platforms that:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✓</span> Convert readers into fans
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✓</span> Adapt to trends without losing your voice
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✓</span> Scale effortlessly as you grow
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            No fluff. Just <span className="text-purple-600">results.</span>
          </h3>
          <p className="text-gray-700">
            Forget cookie-cutter solutions. We focus <strong>100% on bloggers</strong>, so every feature—from SEO to monetization—is tailored to your success.
          </p>
          <button className="mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
            Claim Your Free Strategy Session →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Studio;
