import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../src/images/brandlogo/freepik__sign_an_awesome_logo_with_the_caption_lightru (2).png";
import { Link } from "react-router-dom"; // use 'react-router-dom' instead of 'react-router'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { path: "/", label: "Why Light Run" },
    { path: "/how", label: "How It Works" },
    { path: "/recents", label: "Recent Works" },
    { path: "/blogs", label: "Blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 flex items-center justify-between backdrop-blur-md bg-white/70 dark:bg-black/50 shadow-sm transition-colors duration-300`}
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

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-sm font-medium hover:underline transition"
          >
            {link.label}
          </Link>
        ))}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <a
          href="#sign-in"
          className="bg-black text-white dark:bg-white dark:text-black text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Sign In
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col space-y-1 z-50"
        aria-label="Toggle Menu"
      >
        <span className={`w-6 h-0.5 rounded bg-current`}></span>
        <span className={`w-6 h-0.5 rounded bg-current`}></span>
        <span className={`w-6 h-0.5 rounded bg-current`}></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-black text-gray-800 dark:text-white flex flex-col items-center justify-center gap-6 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium hover:underline"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="#sign-in"
          className="bg-black text-white dark:bg-white dark:text-black text-sm font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Sign In
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl p-2 hover:opacity-80 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-6 text-2xl"
          aria-label="Close Menu"
        >
          ×
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
