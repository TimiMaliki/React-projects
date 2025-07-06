const TrustSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-r from-[#ff1b6b] to-[#45caff] rounded-2xl sm:rounded-3xl rounded-b-none lg:rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-black mb-4">
            Trusted By <span className="text-red-700">Clients Worldwide</span>
          </h2>
          <p className="text-black font-bold max-w-2xl mx-auto text-base sm:text-lg">
            We deliver top-notch website solutions to clients around the globe.
            Here’s what they have to say about working with us.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md">
            <p className="text-black font-bold text-base sm:text-lg mb-4">
              “Absolutely amazing! They built my online store exactly as I
              imagined, and sales have increased dramatically.”
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Client"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-900">Emily R.</h4>
                <span className="text-black text-base sm:text-lg">USA</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md">
            <p className="text-black font-bold text-base sm:text-lg mb-4">
              “They built a stunning website for my travel business. It’s fast,
              mobile-friendly, and easy to manage.”
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Client"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-900">Carlos M.</h4>
                <span className="text-black text-base sm:text-lg">Spain</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md">
            <p className="text-black font-bold text-base sm:text-lg mb-4">
              “Professional, fast, and attentive. My business site looks sleek
              and functions perfectly.”
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt="Client"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-900">Amina K.</h4>
                <span className="text-black text-base sm:text-lg">UAE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
            Join hundreds of happy clients worldwide!
          </h3>
          <a
            href="https://wa.me/qr/RJYG6ACYJUUGB1"
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-5 sm:px-6 py-3 rounded-full font-semibold text-base sm:text-lg shadow-md inline-block"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
