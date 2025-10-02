import React, { useState } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [openDropdown, setOpenDropdown] = useState(null);
  const [locked, setLocked] = useState(false);

  const toggleDropdown = (id) => {
    if (locked && openDropdown === id) {
      setLocked(false);
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
      setLocked(true);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center px-5 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <p className="text-3xl font-modern-negra font-extrabold text-red-600">HTC</p>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex ml-auto">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative group"
                onMouseEnter={() => {
                  if (!locked) setOpenDropdown(link.id);
                }}
                onMouseLeave={() => {
                  if (!locked) setOpenDropdown(null);
                }}
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.id)}
                      className="text-sm md:text-base hover:text-white/50 transition border border-red-700  w-32 h-10 rounded-full  p-2 cursor-pointer px-2 py-1"
                    >
                      {link.title}
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 bg-black text-white rounded-lg shadow-lg transition-all duration-200 ${
                        openDropdown === link.id ? "block" : "hidden"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block px-4 py-2 hover:bg-gray-800 cursor-pointer"
                          >
                               <a href={item.href}>{item.title}</a>
                         
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={`${link.href}`}
                    className="text-sm md:text-base hover:text-white/50 transition"
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          className="md:hidden ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-5 pb-4">
          <ul className="flex flex-col items-end space-y-3">
          {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative group"
                onMouseEnter={() => {
                  if (!locked) setOpenDropdown(link.id);
                }}
                onMouseLeave={() => {
                  if (!locked) setOpenDropdown(null);
                }}
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.id)}
                      className="text-sm md:text-base hover:text-white/50 transition border border-red-700  w-32 h-10 rounded-full  p-2 cursor-pointer px-2 py-1"
                    >
                      {link.title}
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 bg-black text-white rounded-lg shadow-lg transition-all duration-200 ${
                        openDropdown === link.id ? "block" : "hidden"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block px-4 py-2 hover:bg-gray-800 cursor-pointer"
                          >
                               <a href={item.href}>{item.title}</a>
                         
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={`#${link.id}`}
                    className="text-sm md:text-base hover:text-white/50 transition"
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Home;
