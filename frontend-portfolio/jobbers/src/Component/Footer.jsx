import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Jobber</h2>
          <p className="mt-3 text-gray-300 text-sm">
            Connecting job seekers with employers seamlessly. 
            Your next opportunity is just a click away.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="*" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">Find Jobs</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">Employers</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="*" className="hover:text-yellow-300 transition">Blog</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">FAQs</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">Support</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
            <li><a href="*" className="hover:text-yellow-300 transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/TimiMaliki" className="hover:text-yellow-300 transition"><Facebook /></a>
            <a href="https://github.com/TimiMaliki" className="hover:text-yellow-300 transition"><Twitter /></a>
            <a href="https://www.linkedin.com/in/timimaliki" className="hover:text-yellow-300 transition"><Linkedin /></a>
            <a href="https://github.com/TimiMaliki" className="hover:text-yellow-300 transition"><Github /></a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jobber. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
