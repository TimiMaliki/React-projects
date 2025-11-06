import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { MoonStar, SunIcon } from "lucide-react";

const ToggleTheme = () => {
  const { toggleLight, isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;

  return (
    <button
      onClick={toggleLight}
      className="p-2 rounded-full border border-slate-200 shadow-amber-200 hover:scale-105 transition"
      aria-label="Toggle Dark Mode"
      style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}
    >
      {isLight ? (
        <SunIcon size={20} className='cursor-pointer' />
      ) : (
        <MoonStar size={20} className='cursor-pointer' />
      )}
    </button>
  );
};

export default ToggleTheme;
