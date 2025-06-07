import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Diance-Blog</h2>
          <p className="">
            Empowering you to live a healthier life through personalized insights.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#why" className="hover:underline ">Why Diance-Blog</a></li>
            <li><a href="#works" className="hover:underline ">How It Works</a></li>
            <li><a href="#about" className="hover:underline ">About Us</a></li>
            <li><a href="#contact" className="hover:underline ">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#privacy" className="hover:underline ">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline ">Terms of Use</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className=" hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className=" hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className=" hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className=" hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t  pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()}  Diance-Blog Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
