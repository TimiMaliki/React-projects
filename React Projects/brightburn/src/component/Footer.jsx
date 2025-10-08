import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-32 sm:mt-44 pt-12 sm:pt-16 pb-6 sm:pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              Bright<span className="text-red-700"> Burn</span>
            </h2>
            <p className="text-black text-base sm:text-lg">
              Crafting websites that deliver stunning design, unmatched speed, and seamless user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#portfolio" className="hover:text-red-500 transition" id="work">Portfolio</a></li>
              <li><a href="#services" className="hover:text-red-500 transition" id="services">Services</a></li>
              <li><a href="#team" className="hover:text-red-500 transition">Our Team</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Our Services</h3>
            <ul className="space-y-2 text-base">
              <li>Web Design & Development</li>
              <li>E-Commerce Solutions</li>
              <li>Website Maintenance</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/qr/RJYG6ACYJUUGB1" className="hover:text-red-500 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://wa.me/qr/RJYG6ACYJUUGB1" className="hover:text-red-500 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/qr/RJYG6ACYJUUGB1" className="hover:text-red-500 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://wa.me/qr/RJYG6ACYJUUGB1" className="hover:text-red-500 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Bright Burn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
