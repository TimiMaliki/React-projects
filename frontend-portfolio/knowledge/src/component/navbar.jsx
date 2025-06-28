import React, { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(null);


  return (
    <nav
      className="bg-white fixed top-0 left-0 w-full z-50 px-4 py-3 shadow-md flex items-center justify-between transition duration-300"
    >
      <Link to={"/"}>
      <div
        className="flex items-center space-x-3 text-2xl font-extrabold tracking-tight"
      >
        <span className="text-lg md:text-xl">Knowledge.IDK</span>
      </div>
      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
      
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`w-6 h-0.5 bg-white"`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white"`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white"`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col items-start gap-4 px-4 py-6 shadow-md md:hidden transition duration-300">
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
