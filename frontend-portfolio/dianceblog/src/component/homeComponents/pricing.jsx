import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-white dark:bg-[#0b1727] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Flexible Plan for you
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choice suitable plan for you.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
            MONTHLY
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium">
            YEARLY
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Basic Plan */}
          <div className="bg-gray-100 dark:bg-[#101d2c] rounded-xl p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Basic</h3>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              More off this less hello salamander lied porpoise much circa horse taped.
            </p>
            <div className="mb-3">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$20</span>
              <span className="text-gray-500 dark:text-gray-300 ml-2">/month</span>
            </div>
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
              Choose plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-100 dark:bg-[#101d2c] rounded-xl p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Standard</h3>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque.
            </p>
            <div className="mb-3">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$199</span>
              <span className="text-gray-500 dark:text-gray-300 ml-2">/month</span>
            </div>
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
              Choose plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-yellow-500 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="mb-4 opacity-90">
              It’s easier to reach your savings goals when you have the right savings account.
            </p>
            <div className="mb-3">
              <span className="text-2xl font-bold">$399</span>
              <span className="ml-2 opacity-90">/month</span>
            </div>
            <button className="w-full bg-white text-yellow-600 py-2 rounded-md font-semibold hover:bg-yellow-100 transition">
              Choose plan
            </button>
          </div>

          {/* Lifetime Plan */}
          <div className="bg-gray-100 dark:bg-[#101d2c] rounded-xl p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Lifetime</h3>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              Urna molestie at elementum eu facilisis sed odio Male suada fames.
            </p>
            <div className="mb-3">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$1999</span>
              <span className="text-gray-500 dark:text-gray-300 ml-2">/month</span>
            </div>
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
