import { HamburgerContext } from "../context/HamburgerContext";
import { useContext } from "react";
import { downLinks } from "../constant/index";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const SideBarMenu = () => {
  const { menuOpen } = useContext(HamburgerContext);
  const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  return (
    <div
      className={`absolute top-full left-0 w-full transform transition-transform duration-700 shadow-md rounded-b-2xl  text ${
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
        <div
          key={link.id}
          className="flex flex-col items-center py-3 px-6 text-xl"
        >
          <a
            href={link.href}
            className={`hover:text-yellow-400 cursor-pointer }`}
            style={{
              color: themeStyle.hex,
              fontWeight:900
            }}
          >
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SideBarMenu;
