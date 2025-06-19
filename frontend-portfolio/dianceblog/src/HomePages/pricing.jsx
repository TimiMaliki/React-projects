import React from 'react';
import Headers from './header';

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b">
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Growth Plans That Scale With You
          </span>
        </h1>
        <p className="text-xl text-gray-600">
          Whether you're starting out or ready to dominate, we've got your back
        </p>
      </div>
  
      {/* Toggle Switch - Modern Design */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
          <button className="px-8 py-3 rounded-full font-bold bg-purple-600 text-white transition-all">
            Monthly
          </button>
          <button className="px-8 py-3 rounded-full font-bold text-gray-700 hover:text-purple-600 transition-all">
            Yearly (Save 20%)
          </button>
        </div>
      </div>
  
      {/* Pricing Cards - Blog-Focused */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* STARTER PLAN - For New Bloggers */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-lg transition-all">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
              Blog Launchpad
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <p className="text-gray-600 mb-6">
            Perfect for new bloggers ready to build their foundation
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">$97</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Professional blog setup</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>5 custom blog posts/month</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Basic SEO optimization</span>
            </li>
          </ul>
          <button className="w-full bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-colors">
            Start Your Blog
          </button>
        </div>
  
        {/* GROWTH PLAN - For Scaling Blogs */}
        <div className="bg-white rounded-2xl p-8 border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
          <p className="text-gray-600 mb-6">
            For bloggers ready to accelerate their audience
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">$297</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Everything in Starter</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>12 premium blog posts/month</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Advanced SEO strategy</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Monthly growth analytics</span>
            </li>
          </ul>
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Accelerate Growth
          </button>
        </div>
  
        {/* AUTHORITY PLAN - For Established Bloggers */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-300 shadow-sm hover:shadow-lg transition-all">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
              Authority Builder
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Authority</h3>
          <p className="text-gray-600 mb-6">
            For bloggers establishing industry leadership
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">$597</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Everything in Growth</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>20 expert-level posts/month</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Guest post outreach</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Monetization strategy</span>
            </li>
          </ul>
          <button className="w-full bg-white border-2 border-pink-600 text-pink-600 py-3 rounded-xl font-bold hover:bg-pink-600 hover:text-white transition-colors">
            Build Authority
          </button>
        </div>
  
        {/* ENTERPRISE PLAN - For Professional Blog Networks */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold">
              VIP Treatment
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-300 mb-6">
            For professional bloggers & content networks
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$1,997</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Everything in Authority</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Unlimited content creation</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Dedicated content team</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>VIP strategy sessions</span>
            </li>
          </ul>
          <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors">
            Get VIP Access
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PricingSection;
