import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
    // Load from localStorage or default to false
    return localStorage.getItem('theme') === 'dark';
    })

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);



  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-50">
      {/* Brand */}
      <div className="text-2xl font-bold text-gray-800">Diance-Blog</div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-700 hover:text-black focus:outline-none"
          >
            Why Diance-Blog
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <a href="#sleep" className="block px-4 py-2 text-sm hover:bg-gray-100">What we offer</a>
              <a href="#activity" className="block px-4 py-2 text-sm hover:bg-gray-100">How It Works</a>
              <a href="#readiness" className="block px-4 py-2 text-sm hover:bg-gray-100">Products</a>
            </div>
          )}
        </div>
        <a href="#trends" className="text-gray-700 hover:text-black">Latest Trends</a>
        <a href="#about" className="text-gray-700 hover:text-black">About Us</a>
        <a href="#contact" className="text-gray-700 hover:text-black">Contact Us</a>
        <a
          href="#sign-in"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          Sign In
        </a>
        <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-xl transition"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
      
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start gap-4 px-4 py-6 shadow-md md:hidden">
          <div className="w-full">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left text-gray-700 hover:text-black"
            >
              Why Oura
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-1">
                <a href="#sleep" className="text-sm hover:underline">Sleep</a>
                <a href="#activity" className="text-sm hover:underline">Activity</a>
                <a href="#readiness" className="text-sm hover:underline">Readiness</a>
              </div>
            )}
          </div>
          <a href="#how-it-works" className="text-gray-700 hover:text-black">How It Works</a>
          <a href="#shop" className="text-gray-700 hover:text-black">Shop</a>
          <a href="#business" className="text-gray-700 hover:text-black">For Business</a>
          <a
            href="#sign-in"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            Sign In
          </a>
       
         
            
        </div>
      )}
    </nav>
  );
};

export default Navbar;
