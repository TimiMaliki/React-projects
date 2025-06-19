import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../src/images/brandlogo/freepik__sign_an_awesome_logo_with_the_caption_lightru (2).png";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-3 shadow-md flex items-center justify-between transition duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <Link
        to="/"
        className="flex items-center space-x-3 text-2xl font-extrabold tracking-tight"
      >
        <img
          src={logo}
          alt="Light Run Logo"
          className="w-8 h-8 object-contain md:w-10 md:h-10"
        />
        <span className="text-lg md:text-xl">Light Run</span>
      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative">
          <Link to="/">
            <div className="block px-4 py-2 text-sm hover:underline">
              Why Light Run
            </div>
          </Link>
        </div>
        <Link to="/how">
          <div className="block px-4 py-2 text-sm hover:underline">
            How It works
          </div>
        </Link>
        <Link to="/recents">
          <div className="block px-4 py-2 text-sm hover:underline">
            Recents works
          </div>
        </Link>
        <Link to="/blogs">
          <div className="block px-4 py-2 text-sm hover:underline">Blog</div>
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-xl transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <a
          href="#sign-in"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Sign In
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`w-6 h-0.5 ${darkMode ? "bg-white" : "bg-black"}`}
        ></span>
        <span
          className={`w-6 h-0.5 ${darkMode ? "bg-white" : "bg-black"}`}
        ></span>
        <span
          className={`w-6 h-0.5 ${darkMode ? "bg-white" : "bg-black"}`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col items-start gap-4 px-4 py-6 shadow-md md:hidden transition duration-300 ${
            darkMode ? "bg-black text-white" : "bg-white text-gray-800"
          }`}
        >
          <Link to="/">
            <div className="block px-4 py-2 text-sm hover:underline">
              Why Light Run
            </div>
          </Link>
          <Link to="/how">
            <div className="block px-4 py-2 text-sm hover:underline">
              How It works
            </div>
          </Link>
          <Link to="/recents">
            <div className="block px-4 py-2 text-sm ">Recents works</div>
          </Link>
          <Link to="/blogs">
            <div className="block px-4 py-2 text-sm  hover:underline">Blog</div>
          </Link>
          <div className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Sign In
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-xl"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
