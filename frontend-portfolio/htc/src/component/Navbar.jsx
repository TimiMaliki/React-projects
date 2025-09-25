import React, { useState } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black text-white">
   
    <div className="max-w-7xl mx-auto flex items-center px-5 py-4">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <p className="text-3xl font-modern-negra">HTC</p>
      </a>

      {/* Desktop links  */}
      <div className="hidden md:flex ml-auto">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm md:text-base hover:text-gray-300 transition"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu button  */}
      <button
        onClick={() => setIsOpen((s) => !s)}
        className="md:hidden ml-auto"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Mobile  menu  */}
    {isOpen && (
      <div className="md:hidden bg-black text-white px-5 pb-4">
        <ul className="flex flex-col items-end space-y-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block text-right text-base hover:text-gray-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>
  );
};

export default Home;
