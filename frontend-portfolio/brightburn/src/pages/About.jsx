import AboutHeroImg from "../images/About/professional-programmer-working-late-dark-office.jpg";
import SelfImg from "../images/About/top-view-unrecognizable-hacker-performing-cyberattack-night.jpg";
import Team from "./Team";
const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] rounded-2xl rounded-b-none lg:rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0  bg-cover object-cover bg-center bg-no-repeat w-full h-full"
          style={{ backgroundImage: `url(${AboutHeroImg})` ,  height: '800px',}}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold  text-white mb-6">
            Crafting Digital <span className="text-red-500">Excellence</span>
          </h1>
          <p className="text-2xl font-semibold text-white max-w-3xl mx-auto mb-8">
            We're a passionate team of designers, developers, and strategists
            dedicated to building websites that drive real business results.
          </p>
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 bg-white">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-7xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-500">Story</span>
              </h2>
              <p className="text-black text-2xl mb-6">
                Founded in 2025, we started as a small team of two developers
                working from a coffee shop. Today, we've grown into an
                international web design agency serving clients across 5+
                countries.
              </p>
              <p className="text-black text-2xl mb-6">
                What hasn't changed is our commitment to quality, our passion
                for technology, and our belief that every business deserves a
                website that truly represents them.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-red-600 text-4xl font-bold mb-2">30+</h3>
                  <p className="text-black">Projects Completed</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-red-600 text-4xl font-bold mb-2">5+</h3>
                  <p className="text-black">Countries Served</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-4xl">
                <img
                  src={SelfImg}
                  alt="Our team working together"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white text-lg">
                   Bringing Ideas to life 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-500">Approach</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              We don't just build websites - we create digital experiences that
              drive growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Design
              </h3>
              <p className="text-gray-700">
                Every pixel serves a purpose. We design with your business goals
                in mind, creating interfaces that convert visitors into
                customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cutting-Edge Tech
              </h3>
              <p className="text-gray-700">
                We stay ahead of the curve with the latest technologies to
                ensure your website is fast, secure, and future-proof.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data-Driven
              </h3>
              <p className="text-gray-700">
                We make decisions based on analytics and user behavior, not
                guesswork. Your success is measured and optimized.
              </p>
            </div>
          </div>
        </div>
      </section>

    <Team/>
    </>
  );
};

export default AboutPage;
