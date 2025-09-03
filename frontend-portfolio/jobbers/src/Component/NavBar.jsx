import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkActive = ({ isActive }) =>
    isActive
      ? "relative text-green-600 font-semibold after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-green-600 after:rounded-full"
      : "relative text-green-600 hover:text-yellow-600 transition-colors duration-200";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to={"/"}>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-green-600">
                  Jobber
                </h1>
                <span className="ml-1 text-green-600 text-lg">®</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to={"/"} className={linkActive}>
              Home
            </NavLink>
            <NavLink to={"/jobs"} className={linkActive}>
              Jobs
            </NavLink>
            <NavLink to={"/search"} className={linkActive}>
             Search Jobs
            </NavLink>
            <NavLink to={"/add-job"} className={linkActive}>
              Add Job
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-600 hover:text-yellow-600 focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <NavLink
              to={"/"}
              className={linkActive}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/jobs"}
              className={linkActive}
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </NavLink>
            <NavLink
              to={"/add-job"}
              className={linkActive}
              onClick={() => setIsOpen(false)}
            >
              Add Job
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
