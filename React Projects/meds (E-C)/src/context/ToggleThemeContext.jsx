import { createContext, useState, useEffect } from "react";

export const ToggleThemeContext = createContext();

const ToggleThemeContextProvider = ({ children }) => {
  // Load theme from localStorage on initial render, default to true (light mode)
  const [isLight, setLight] = useState(() => {
    const savedTheme = localStorage.getItem('themeMode');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  const [themeContextState, setThemeContextState] = useState({
    light: { hex: "#fff", ui: "#000", bg: "#000" },
    dark: { hex: "#010101", ui: "#fff", bg: "#FFFFFF"},
    videoTheme : { 
      sourceOne : "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.mp4",
      sourceTwo : "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.webm",
    },
    videoUi : {ui: "#000", bg: "#FFFFFF"},
    videoBg : {ui: "#fff", bg: "#000"}
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('themeMode', JSON.stringify(isLight));
  }, [isLight]);

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