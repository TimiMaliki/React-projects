import AboutHeroImg from "../images/About/teamOne.jpg";
import SelfImg from "../images/About/started.jpg";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImg})` }}
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

      {/* Team Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-red-500">Team</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              The creative minds behind your digital success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "15+ years in web development. Passionate about creating digital experiences that make an impact.",
              },
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "Design expert with a focus on user psychology and conversion optimization.",
              },
              {
                name: "Miguel Rodriguez",
                role: "Lead Developer",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
                bio: "Full-stack wizard who turns complex ideas into flawless code.",
              },
              {
                name: "Priya Patel",
                role: "Client Success",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                bio: "Your advocate, ensuring every project exceeds expectations.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-red-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{member.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-red-600">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-red-600">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-red-600">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
