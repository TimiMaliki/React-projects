import React , {createContext, useState} from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [ themeContextState , setThemeContextState] = useState({
      isLightThem : true,
      light : { hex:"#555",ui:"#ddd",bg:"#eee"},
      dark : { hex:"#ddd",ui:"#333",bg:"#555"}
    })
    return (
     <ThemeContext.Provider value={{...themeContextState ,setThemeContextState}}>
         {children}
     </ThemeContext.Provider>
    )
  }
  
  export default ThemeContextProvider