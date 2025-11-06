import {  createContext , useState } from "react";

export const HamburgerContext = createContext()

const HamburgerContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HamburgerContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerContextProvider;


