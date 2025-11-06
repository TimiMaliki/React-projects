import { useContext } from "react";
import { HamburgerContext } from "../context/HamburgerContext";
import { Menu, X } from "lucide-react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const Hamburger = () => {
  const { menuOpen, setMenuOpen } = useContext(HamburgerContext);
  const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  return (
    <div className="flex items-center gap-2">
      <button
        className="w-10 h-10 flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <X
            size={26}
            className="text-white cursor-pointer"
            style={{
              background: themeStyle.bg,
              color: themeStyle.hex,
            }}
          />
        ) : (
          <Menu
            size={26}
            className="text-white cursor-pointer"
            style={{
              background: themeStyle.bg,
              color: themeStyle.hex,
            }}
          />
        )}
      </button>
      <span
        className="uppercase tracking-wide cursor-pointer text-xl"
        style={{ fontWeight: 900 }}
      >
        Menu
      </span>
    </div>
  );
};

export default Hamburger;
