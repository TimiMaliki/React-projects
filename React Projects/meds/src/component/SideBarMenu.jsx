import { HamburgerContext } from '../context/HamburgerContext';
import   { useContext } from 'react';
import { downLinks } from "../constant/index"


const SideBarMenu = () => {
    const {menuOpen} = useContext(HamburgerContext)
  return (
   <div
        className={`absolute top-full left-0 w-full bg-black text-white transform transition-transform duration-700  ${
          menuOpen ? "translate-x-0  dropdown-menu-transition" : "-translate-x-full"
        }`}
      >
        {downLinks.map((link) => (
          <div key={link.id} className="flex flex-col items-center mb-2 space-y-4"
          >
             <a  href = {link.href}  className="hover:text-yellow-400 cursor-pointer" style={{fontWeight:"800"}}>{link.title}</a>
          </div>
        ))}
      </div>
  )
}

export default SideBarMenu