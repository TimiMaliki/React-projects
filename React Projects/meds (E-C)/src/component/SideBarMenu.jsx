import { HamburgerContext } from "../context/HamburgerContext";
import { useContext } from "react";
import { downLinks } from "../constant/index";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { Link } from "react-router-dom";

const SideBarMenu = () => {
  const { menuOpen , setMenuOpen } = useContext(HamburgerContext);
  const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  return (
    <div
      className={`absolute top-full left-0 w-full transform backdrop-blur-lg bg-white/70 transition-all duration-700 shadow-md  text ${
        menuOpen
          ? "translate-x-0  dropdown-menu-transition"
          : "-translate-x-full"
      }`}
      style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}
    >
      {downLinks.map((link) => (
        <Link to={link.href}  key={link.id}  onClick={() => setMenuOpen(false)} >
        <div
          className="flex flex-col items-center py-3 px-6 text-xl"
        >
          
          <div
            className={`hover:text-yellow-400 cursor-pointer }`}
            style={{
              color: themeStyle.hex,
              fontWeight:900
            }}
          >
            {link.title}
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBarMenu;
