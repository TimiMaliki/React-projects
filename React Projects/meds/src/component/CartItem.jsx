import { ShoppingCart } from 'lucide-react'
import { useContext } from "react"
import { ToggleThemeContext } from "../context/ToggleThemeContext"


const CartItem = () => {
   const { isLight, light, dark } = useContext(ToggleThemeContext)
     const themeStyle = isLight ? light : dark;
  return (
    <div className='cursor-pointer'>
        <ShoppingCart size={29} className='text-white cursor-pointer' style={{
        color: themeStyle.hex,
      }}/>
    </div>
  )
}

export default CartItem