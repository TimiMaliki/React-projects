import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-center">
        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center">
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

      {/* Footer Bottom */}
      <div className="mt-8 border-t  pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()}  Light Run Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
