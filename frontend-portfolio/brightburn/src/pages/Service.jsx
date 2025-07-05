const ServicesSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-extrabold text-black mb-4">
            Our <span className="text-red-700">Website</span> Services
          </h2>
          <p className="text-black max-w-2xl mx-auto text-xl font-bold">
            Whether you need a simple landing page or a complete website
            solution, we provide everything you need for success online.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-extrabold text-black mb-4">
              Single Page Websites
            </h3>
            <p className="text-black text-lg mb-6 ">
              Clean, fast, and effective one-page websites designed to deliver
              your message instantly.
            </p>
            <a
              href="#contact"
              className="text-red-600 hover:text-red-700 font-semibold text-base"
            >
              Get Started →
            </a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-extrabold text-black mb-4">
              Multi-Page Websites
            </h3>
            <p className="text-black text-lg mb-6">
              Structured, scalable websites with multiple pages and easy
              navigation for businesses and brands.
            </p>
            <a
              href="#contact"
              className="text-red-600 hover:text-red-700 font-semibold text-base"
            >
              Explore More →
            </a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-extrabold text-black mb-4">
              eCommerce Websites
            </h3>
            <p className="text-black text-lg mb-6">
              Powerful online stores with secure payments, inventory, and
              product management.
            </p>
            <a
              href="#contact"
              className="text-red-600 hover:text-red-700 font-semibold text-base"
            >
              Start Selling →
            </a>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-extrabold text-black mb-4">
              Versatile Platform Expertise
            </h3>
            <p className="text-black text-lg mb-6">
              We work with all platforms — WordPress, Wix, Shopify, and custom
              templates — giving you full flexibility.
            </p>
            <a
              href="#contact"
              className="text-red-600 hover:text-red-700 font-semibold text-base"
            >
              See Options →
            </a>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-black mb-4">
              Build, Host & Maintain
            </h3>
            <p className="text-black text-lg mb-6">
              We don’t just build your website — we can also host and maintain
              it to keep it secure, fast, and up-to-date.
            </p>
            <a
              href="#contact"
              className="text-red-600 hover:text-red-700 font-semibold text-base"
            >
              Learn More →
            </a>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-black mb-4">
              Website Redesign Services
            </h3>
            <p className="text-gray-700 mb-6">
              Got an outdated or unattractive site? We’ll transform it into a
              modern, stunning website that wows visitors.
            </p>
            <a
              href="#contact"
              className="text-red-600 hover:text-red-700 font-semibold text-base"
            >
              Refresh Your Site →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
