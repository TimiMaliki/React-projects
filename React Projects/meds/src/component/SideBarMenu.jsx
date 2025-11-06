import { HamburgerContext } from '../context/HamburgerContext';
import   { useContext } from 'react';
import {dropLinks} from "../constant/index"


const SideBarMenu = () => {
    const {menuOpen} = useContext(HamburgerContext)
  return (
   <div
        className={`absolute top-full left-0 w-full bg-black text-white transform transition-transform duration-700 ${
          menuOpen ? "translate-x-0  dropdown-menu-transition" : "-translate-x-full"
        }`}
      >
        {dropLinks.map((link) => (
          <div key={link.id} className="flex flex-col items-center py-6 space-y-4"
          >
             <a  href = {link.href}  classname
          </div>
        ))}
        <div >
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/about" className="hover:text-yellow-400">About Us</a>

          {/* Dropdown for Products
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400">
              Products <ChevronDown size={18} className="mt-1" />
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-gray-900 mt-2 rounded-md shadow-lg">
              <a href="/cartridge" className="px-4 py-2 hover:bg-gray-800">
                Cartridges
              </a>
              <a href="/disposables" className="px-4 py-2 hover:bg-gray-800">
                Disposables
              </a>
            </div>
          </div> */}

          <a href="/store-locator" className="hover:text-yellow-400">Find Us</a>
          <a href="/deals" className="hover:text-yellow-400">Deals</a>
          <a href="/contact" className="hover:text-yellow-400">Contact Us</a>
        </div>
      </div>
  )
}

export default SideBarMenu