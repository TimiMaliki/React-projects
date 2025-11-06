import React, { useContext } from "react";
import Hamburger from "../component/Hamburger";
import { HamburgerContext } from "../context/HamburgerContext";
import DropdownMenu from "./SideBarMenu";

export const Navbar = () => {
  const { menuOpen } = useContext(HamburgerContext);

  return (
    <nav className="navbar bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left section: Menu icon */}
        <Hamburger />
        {/* Center: Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/6228266f01d0b00f3d659615_MM-Gold-Logo-mmlogo.png"
            alt="MM Gold Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Right button */}
        <div>
          <a
            href="/verify"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition g-anton-fonts"
          >
            VERIFICATION
          </a>
        </div>
      </div>

      {/* Dropdown Menu */}
      <DropdownMenu/>
    </nav>
  );
};
