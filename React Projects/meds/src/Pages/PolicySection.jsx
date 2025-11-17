import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

function PolicySection({ title, subtitle, text }) {
    const { isLight, dark, light } = useContext(ToggleThemeContext);
              const themeStyle = isLight ? light : dark;
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/3">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="text-xl mt-2">{subtitle}</div>
      </div>
      <div className="w-full md:w-2/3">
        <p className="leading-relaxed  text-lg whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
}


export default PolicySection;