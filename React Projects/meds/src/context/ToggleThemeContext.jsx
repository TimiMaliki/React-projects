import { createContext, useState } from "react";

export const ToggleThemeContext = createContext();

const ToggleThemeContextProvider = ({ children }) => {
  const [isLight, setLight] = useState(true);
  const [themeContextState, setThemeContextState] = useState({
    light: { hex: "#fff", ui: "#000", bg: "#000" },
    dark: { hex: "#010101", ui: "#fff", bg: "#FFFFFF", shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"},
  });

  const toggleLight = () => {
    setLight((prev) => !prev);
  };

  return (
    <ToggleThemeContext.Provider
      value={{
        ...themeContextState,
        setThemeContextState,
        toggleLight,
        isLight,
      }}
    >
      {children}
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeContextProvider;
