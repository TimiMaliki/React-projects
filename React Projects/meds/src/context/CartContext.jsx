import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  getProductData: () => {} // Added this function
});

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  
  // This will be set from outside - products will be passed when adding to cart
  const [productsData, setProductsData] = useState({});

  function getProductQuantity(id) {
    const product = cartProducts.find(product => product.id === id);
    return product ? product.quantity : 0;
  }

  // Store product data when adding to cart
  function storeProductData(product) {
    setProductsData(prev => ({
      ...prev,
      [product.id]: product
    }));
  }

  function getProductData(id) {
    return productsData[id];
  }

  function addOneToCart(product) {
    const quantity = getProductQuantity(product.id);

    // Store the product data
    storeProductData(product);

    if (quantity === 0) {
      // Product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: product.id,
          quantity: 1
        }
      ]);
    } else {
      // Product is already in cart
      setCartProducts(
        cartProducts.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts(cartProducts.filter(item => item.id !== id));
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      const productData = getProductData(cartItem.id);
      if (productData && productData.price) {
        // Remove $ and convert to number
        const price = parseFloat(productData.price.replace('$', ''));
        totalCost += price * cartItem.quantity;
      }
    });
    return totalCost.toFixed(2);
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getProductData
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;