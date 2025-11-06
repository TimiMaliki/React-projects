import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { MoonStar, SunIcon } from "lucide-react";

const ToggleTheme = () => {
  const { toggleLight, isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;

  return (
    <button
      onClick={toggleLight}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
      aria-label="Toggle Dark Mode"
      style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}
    >
      {isLight ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonStar className="w-6 h-6 text-gray-300" />
      )}
    </button>
  );
};

export default ToggleTheme;
