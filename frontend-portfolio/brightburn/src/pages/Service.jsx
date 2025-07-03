const Services = () => {
    return (
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Our <span className="text-red-500">Website</span> Services
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                Whether you need a simple landing page or a complex online store,
                we deliver solutions that impress and perform.
              </p>
            </div>
    
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Single Page Websites
                </h3>
                <p className="text-gray-700 mb-6">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Multi-Page Websites
                </h3>
                <p className="text-gray-700 mb-6">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  eCommerce Websites
                </h3>
                <p className="text-gray-700 mb-6">
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
            </div>
          </div>
        </section>
      );
}
 
export default Services;