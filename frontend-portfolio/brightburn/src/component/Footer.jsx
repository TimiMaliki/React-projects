import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-44 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Bright<span className="text-red-700"> Burn</span>
            </h2>
            <p className="text-black text-lg">
              Crafting websites that deliver stunning design, unmatched speed, and seamless user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">Services</a></li>
              <li><a href="#team" className="hover:text-red-500 transition">Our Team</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>Web Design & Development</li>
              <li>E-Commerce Solutions</li>
              <li>Website Maintenance</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Bright Burn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
