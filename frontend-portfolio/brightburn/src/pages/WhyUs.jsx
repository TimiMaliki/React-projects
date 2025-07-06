const WhyUS = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-black mb-6">
            Why <span className="text-red-700">Trust Us</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-base sm:text-lg font-bold">
            We're not just another web agency — we’re your dedicated partner for success.  
            Here’s why customers around the world choose us again and again.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Reason 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-red-600">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
              Unmatched Quality
            </h3>
            <p className="text-black text-base sm:text-xl">
              We build websites with pixel-perfect precision, ensuring fast
              load times, clean design, and flawless functionality.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-red-600">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
              Global Experience
            </h3>
            <p className="text-black text-base sm:text-xl">
              Trusted by clients in over 15 countries — we understand global
              markets and deliver websites that work everywhere.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-red-600">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
              Full-Service Approach
            </h3>
            <p className="text-black text-base sm:text-xl">
              From design to development, hosting, maintenance, and SEO — we
              handle everything for your website’s success.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-red-600">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
              Affordable Packages
            </h3>
            <p className="text-black text-base sm:text-xl">
              High-quality websites shouldn’t break the bank. Our pricing is
              transparent, fair, and packed with value.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-red-600">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
              Speed & Reliability
            </h3>
            <p className="text-black text-base sm:text-xl">
              Fast turnaround times without sacrificing quality. We meet
              deadlines and exceed expectations, every time.
            </p>
          </div>

          {/* Reason 6 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-red-600">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
              Lifetime Support
            </h3>
            <p className="text-black text-base sm:text-xl">
              We don’t disappear after launch. You’ll get ongoing support,
              updates, and help — whenever you need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUS;
