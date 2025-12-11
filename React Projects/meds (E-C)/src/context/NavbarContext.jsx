import {createContext, useState} from "react"
import {links} from "../constant/index"

export const NavbarContext = createContext()

export const NavbarContextProvider = ({children}) => {
 const [menu , setMenu] = useState(links)

    return(
 <NavbarContext.Provider value={{menu,setMenu}}>
    {children}
    </NavbarContext.Provider>
    )
}


export default NavbarContextProvider