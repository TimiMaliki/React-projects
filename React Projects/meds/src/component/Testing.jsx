import { useContext } from "react"
import { ToggleThemeContext } from "../context/ToggleThemeContext"

const Testing = () => {
    const { isLight, light, dark } = useContext(ToggleThemeContext)
     const themeStyle = isLight ? light : dark;
  return (
    <div className='mt-44 ' style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>Testing</div>
  )
}

export default Testing