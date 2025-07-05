const PricingSection = () => {
    return (
      <section className="w-full py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-extrabold text-black mb-4">
              Flexible <span className="text-red-700">Pricing Plans</span>
            </h2>
            <p className="text-black max-w-2xl mx-auto text-xl font-bold">
              Affordable plans for every business — from one-page sites to
              full-featured eCommerce platforms, plus maintenance & hosting.
            </p>
          </div>
  
          {/* Website Builds */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {/* Single Page */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Single Page Website
              </h3>
              <p className="text-4xl font-extrabold text-red-600 mb-4">$299</p>
              <p className="text-black mb-6 text-lg">
                Clean, fast, and effective one-page website.
              </p>
              <ul className="text-black space-y-2 mb-6 text-lg">
                <li>✓ Mobile-Responsive Design</li>
                <li>✓ Contact Form</li>
                <li>✓ Speed Optimized</li>
                <li>✓ SEO Ready</li>
              </ul>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-5 py-3 rounded-full shadow-md inline-block transition"
              >
                Get Started
              </a>
            </div>
  
            {/* Multi Page */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Multi-Page Website
              </h3>
              <p className="text-4xl font-extrabold text-red-600 mb-4">$799</p>
              <p className="text-black mb-6 text-lg">
                Ideal for businesses with multiple pages.
              </p>
              <ul className="text-black space-y-2 mb-6 text-lg">
                <li>✓ Up to 10 Pages</li>
                <li>✓ Blog Integration</li>
                <li>✓ Analytics Setup</li>
                <li>✓ SEO Optimization</li>
              </ul>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-5 py-3 rounded-full shadow-md inline-block transition"
              >
                Start Project
              </a>
            </div>
  
            {/* eCommerce */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                eCommerce Website
              </h3>
              <p className="text-4xl font-extrabold text-red-600 mb-4">$1,499</p>
              <p className="text-black mb-6 text-lg">
                Complete online store setup with advanced features.
              </p>
              <ul className="text-black space-y-2 mb-6 text-lg">
                <li>✓ Unlimited Products</li>
                <li>✓ Secure Payment Gateway</li>
                <li>✓ Inventory System</li>
                <li>✓ Speed & Security Optimized</li>
              </ul>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-5 py-3 rounded-full shadow-md inline-block transition"
              >
                Start Selling
              </a>
            </div>
          </div>
  
          {/* Hosting & Maintenance */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Hosting */}
            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Website Hosting
              </h3>
              <p className="text-3xl font-extrabold text-red-600 mb-4">$19/mo</p>
              <p className="text-black mb-6 text-lg">
                Fast, reliable cloud hosting with daily backups.
              </p>
              <ul className="text-black space-y-2 mb-6 text-lg">
                <li>✓ SSL Certificate</li>
                <li>✓ Unlimited Bandwidth</li>
                <li>✓ Global CDN</li>
              </ul>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-5 py-3 rounded-full shadow-md inline-block transition"
              >
                Subscribe
              </a>
            </div>
  
            {/* Maintenance */}
            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Website Maintenance
              </h3>
              <p className="text-3xl font-extrabold text-red-600 mb-4">$49/mo</p>
              <p className="text-black mb-6 text-lg">
                Monthly updates, security checks, and technical support.
              </p>
              <ul className="text-black space-y-2 mb-6 text-lg">
                <li>✓ Content Updates</li>
                <li>✓ Plugin/Theme Updates</li>
                <li>✓ Security Monitoring</li>
              </ul>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-5 py-3 rounded-full shadow-md inline-block transition"
              >
                Enroll Now
              </a>
            </div>
  
            {/* Maintenance Yearly */}
            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Yearly Maintenance Plan
              </h3>
              <p className="text-3xl font-extrabold text-red-600 mb-4">$499/year</p>
              <p className="text-black mb-6 text-lg">
                Full maintenance & priority support for a year (Save $89).
              </p>
              <ul className="text-black space-y-2 mb-6 text-lg">
                <li>✓ Everything in Monthly Plan</li>
                <li>✓ Priority Support</li>
                <li>✓ Annual Performance Report</li>
              </ul>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-5 py-3 rounded-full shadow-md inline-block transition"
              >
                Save With Yearly
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingSection;
  