import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  getProductData: () => {},
  clearCart: () => {},
  updateQuantity: () => {}
});

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [productsData, setProductsData] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    const savedProductsData = localStorage.getItem('cartProductsData');
    
    if (savedCart) {
      try {
        setCartProducts(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart items:', error);
        setCartProducts([]);
      }
    }
    
    if (savedProductsData) {
      try {
        setProductsData(JSON.parse(savedProductsData));
      } catch (error) {
        console.error('Error parsing products data:', error);
        setProductsData({});
      }
    }
    
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever cartProducts or productsData changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cartItems', JSON.stringify(cartProducts));
      localStorage.setItem('cartProductsData', JSON.stringify(productsData));
    }
  }, [cartProducts, productsData, isInitialized]);

  function getProductQuantity(id) {
    const product = cartProducts.find(product => product.id === id);
    return product ? product.quantity : 0;
  }

  function storeProductData(product) {
    if (!product || !product.id) return;
    
    setProductsData(prev => ({
      ...prev,
      [product.id]: {
        id: product.id,
        name: product.name,
        type: product.type,
        price: product.price,
        image: product.image || product.img, // Handle both image and img properties
        link: product.link
      }
    }));
  }

  function getProductData(id) {
    return productsData[id];
  }

  function addOneToCart(product) {
    if (!product || !product.id) {
      console.error('Invalid product:', product);
      return;
    }

    const quantity = getProductQuantity(product.id);

    // Store the product data first
    storeProductData(product);

    if (quantity === 0) {
      // Product is not in cart
      setCartProducts(prev => [
        ...prev,
        {
          id: product.id,
          quantity: 1
        }
      ]);
    } else {
      // Product is already in cart
      setCartProducts(prev =>
        prev.map(item =>
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
      setCartProducts(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  }

  function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
      deleteFromCart(id);
      return;
    }

    setCartProducts(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }

  function deleteFromCart(id) {
    setCartProducts(prev => prev.filter(item => item.id !== id));
    
    // Also remove from productsData
    setProductsData(prev => {
      const newData = { ...prev };
      delete newData[id];
      return newData;
    });
  }

  function getTotalCost() {
    let totalCost = 0;
    
    cartProducts.forEach((cartItem) => {
      const productData = getProductData(cartItem.id);
      
      if (productData && productData.price) {
        // Remove $ and convert to number
        const priceString = productData.price;
        const price = parseFloat(priceString.replace('$', '').replace(',', ''));
        
        if (!isNaN(price)) {
          totalCost += price * cartItem.quantity;
        }
      }
    });
    
    return totalCost;
  }

  // Clear cart function
  function clearCart() {
    setCartProducts([]);
    setProductsData({});
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getProductData,
    clearCart,
    updateQuantity
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;