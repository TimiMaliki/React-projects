import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
      {/* Brand */}
      <Link to={"/"}>
        <div className="text-2xl font-bold">Diance-Blog</div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`hover:underline focus:outline-none ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Why Diance-Blog
          </button>
          {dropdownOpen && (
            <div
              className={`absolute top-full left-0 mt-2 w-40 border rounded shadow-lg ${
                darkMode
                  ? "bg-black text-white border-gray-700"
                  : "bg-white text-gray-800"
              }`}
            >
              <a
                href="#sleep"
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                How It works
              </a>
              <Link to="/recents">
                <div className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                Recents works
                </div>
              </Link>
            </div>
          )}
        </div>
        <Link to="/blogs">
          <div className="hover:underline">Blog</div>
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
          <div className="w-full">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left hover:underline"
            >
              Why Diance-Blog
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-1">
                <div  className="block px-4 py-2 text-sm ">How It works</div>
                <Link to="/recents">
                Recents works
                </Link>
              </div>
            )}
          </div>
          <Link to="/blogs">
            <div className="hover:underline">Blog</div>
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
