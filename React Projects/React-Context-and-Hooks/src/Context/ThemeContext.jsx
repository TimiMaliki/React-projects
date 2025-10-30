import React , {createContext, useState} from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [isLight , setLight] = useState(true)
    const [ themeContextState , setThemeContextState] = useState({
      light : { hex:"#555",ui:"#ddd",bg:"#eee"},
      dark : { hex:"#ddd",ui:"#333",bg:"#555"}
    })

    const toggle =()=>{
    setLight(!isLight)
    }
    return (
     <ThemeContext.Provider value={{...themeContextState ,setThemeContextState,toggle,isLight}}>
         {children}
     </ThemeContext.Provider>
    )
  }
  
  export default ThemeContextProvider

;