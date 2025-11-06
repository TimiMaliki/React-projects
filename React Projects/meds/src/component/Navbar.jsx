import Hamburger from "../component/Hamburger";
import CartItem from "./CartItem";
import ToggleTheme from "../component/ToogleTheme";
import SideBarMenu from "./SideBarMenu";
import { useContext } from "react"
import { ToggleThemeContext } from "../context/ToggleThemeContext"

export const Navbar = () => {
   const { isLight, light, dark } = useContext(ToggleThemeContext)
     const themeStyle = isLight ? light : dark;
  return (
    <nav className="navbar  fixed top-0 left-0 w-full z-50"  style={{
        background: themeStyle.bg,
        color: themeStyle.hex,}}>
          
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left section: Menu icon */}
        <Hamburger />
        {/* Center: Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/6228266f01d0b00f3d659615_MM-Gold-Logo-mmlogo.png"
            alt="MM Gold Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Right button */}
      <div className="flex justify-center items-center gap-4">
          <CartItem/>
        <ToggleTheme/>
      </div>
      </div>

      {/* sidebar Menu */}
      <SideBarMenu/>
    </nav>
  );
};
