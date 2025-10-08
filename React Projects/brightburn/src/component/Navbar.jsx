import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About US", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Portfolio", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link to="/">
          <h2 className="text-3xl font-extrabold font-sans text-black">
            Bright <span className="text-red-700">Burn</span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              className="text-md font-medium text-gray-800 hover:text-red-600 transition-all duration-300"
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-md bg-red-600 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow-lg rounded-b-xl">
          {navLinks.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-all duration-300"
            >
              {nav.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
