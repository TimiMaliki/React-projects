import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Portfolio", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 px-4 py-3 shadow-lg bg-white text-white transition-all duration-300 hover:brightness-110">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="pl-3 lg:pl-10">
          <h2 className="text-3xl font-extrabold font-sans text-black">
            Bright <span className="text-red-700">Burn</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 p-2 rounded-lg bg-gradient-to-r from-[#ff1b6b]  to-[#45caff] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          {navLinks.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              className="text-md font-medium text-white hover:text-yellow-100 hover:no-underline px-3 py-1 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* Button Menu */}
        <button
          className="flex flex-col space-y-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8  rounded-s-xl rounded-e-xl bg-red-600 text-black" />
          ) : (
            <Bars3Icon className="h-8 w-8 rounded-s-xl rounded-e-xl bg-red-600 text-black" />
          )}
        </button>
      </div>
{/* Mobile Menu */}

{isOpen && (
  <div className="flex flex-col text-center md:hidden absolute top-full right-0 w-full items-start gap-4 px-4 py-6  bg-white">
  {navLinks.map((nav, index) => (
    <a
      key={index}
      href={nav.href}
      className="text-lg  text-black font-sans font-bold w-full px-1 py-2 rounded-xl bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02"
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
