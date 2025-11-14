import { ShoppingCart } from 'lucide-react'
import { useContext } from "react"
import { ToggleThemeContext } from "../context/ToggleThemeContext"
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'

const CartItem = () => {
  const { isLight, light, dark } = useContext(ToggleThemeContext)
  const { items } = useContext(CartContext)
  
  const themeStyle = isLight ? light : dark;
  
  // Calculate total items in cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className='cursor-pointer relative'>
      <Link to={"/cartpage"}>
      <ShoppingCart size={29} className='text-white cursor-pointer' style={{
        color: themeStyle.hex,
      }}/>
      
      {/* Cart badge showing item count */}
      {totalItems > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {totalItems}
        </div>
      )}
      </Link>
    </div>
  )
}

export default CartItem