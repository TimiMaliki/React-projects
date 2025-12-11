import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { Trash2, ShoppingCart, CreditCard, Wallet, Plus, Minus, ArrowLeft, MailCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    items,
    deleteFromCart,
    getTotalCost,
    getProductData,
    clearCart,
    updateQuantity,
    addOneToCart,
    removeOneFromCart
  } = useContext(CartContext);

  const { isLight, light, dark } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;

  const totalCost = Number(getTotalCost() || 0);
  const tax = totalCost * 0.1;
  const grandTotal = totalCost + tax;

  // Calculate total items count
  const totalItemsCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div
      className="min-h-screen py-32 px-4 transition-colors duration-300"
      style={{ background: themeStyle.bg, color: themeStyle.hex }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              to="/products" 
              className="flex items-center space-x-2  hover:transition-colors"
              style={{color: themeStyle.hex }}
            >
              <ArrowLeft size={20} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" >
          {/* ================= LEFT SIDE: CART ITEMS ================= */}
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-white/10 backdrop-blur-md border border-gray-300/30 rounded-2xl p-12 text-center">
                <ShoppingCart size={64} className="mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                <p className=" mb-6">Start adding some amazing products to your cart!</p>
                <Link 
                  to="/products"
                  className="inline-flex items-center space-x-2 bg-yellow-600  px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <span>Start Shopping</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const product = getProductData(item.id);
                  const productPrice = product?.price
                    ? parseFloat(product.price.replace("$", ""))
                    : 0;
                  const itemTotal = (productPrice * item.quantity).toFixed(2);

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-center justify-between bg-white/10 backdrop-blur-md border border-gray-300/20 rounded-2xl p-6 shadow-md transition-all duration-200 hover:shadow-lg"
                    >
                      {/* Product Info */}
                      <div className="flex items-center space-x-4 flex-1 min-w-0 mb-4 sm:mb-0">
                        <img
                          src={product?.image || product?.img || "/placeholder.jpg"}
                          alt={product?.name || "Product"}
                          className="w-24 h-24 object-cover rounded-xl shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold  mb-1 truncate  text-xl">
                            {product?.name || `Product ${item.id}`}
                          </h3>
                          <p className=" font-medium mb-2 text-md">
                            {product?.type || "Product"}
                          </p>
                          <p className=" font-bold text-lg">
                            ${productPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls and Total */}
                      <div className="flex items-center space-x-6 w-full sm:w-auto justify-between sm:justify-end"style={{color: themeStyle.hex }}>
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3 bg-black/20 rounded-lg p-1">
                          <button
                            onClick={() => removeOneFromCart(item.id)}
                            className="p-1 rounded-full transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          
                          <span className="font-semibold min-w-[30px] text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => addOneToCart(product)}
                            className="p-1 rounded-full transition-colors cursor-pointer"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <p className="text-blue-400 font-bold text-lg">
                            ${itemTotal}
                          </p>
                          <p className="text-md " style={{color: themeStyle.hex }}>
                            ${productPrice.toFixed(2)} × {item.quantity}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => deleteFromCart(item.id)}
                          className="p-2 bg-red-900/20 text-red-600 rounded-xl hover:bg-red-500/30 transition-colors flex items-center justify-center cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ================= RIGHT SIDE: SUMMARY / CHECKOUT ================= */}
          {items.length > 0 && (
            <div className="sticky top-20 bg-white/10 backdrop-blur-md border border-gray-300/30 rounded-2xl shadow-xl p-6 h-fit" style={{color: themeStyle.hex }}>
              <h2 className="text-2xl font-semibold mb-6 border-b border-white/20 pb-4">
                Order Summary
              </h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="">Items ({totalItemsCount})</span>
                  <span className="font-semibold">${totalCost.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="">Shipping</span>
                  <span className="text-green-400 font-semibold">$20</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <hr className="my-4 border-white/20" />

              {/* Grand Total */}
              <div className="flex justify-between items-center text-xl font-bold mb-6">
                <span>Total Amount</span>
                <span className="text-green-400">${grandTotal.toFixed(2)}</span>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3">
                  <button
                  className="w-full py-4 flex items-center justify-center space-x-3 rounded-xl bg-[#008707] cursor-pointer font-semibold hover:bg-[#005c1c] transition-all shadow-lg hover:shadow-xl"
                  onClick={() => alert("Proceed to PayPal Checkout")}
                >
               
                  <MailCheck size={20} />
                  <a href="mailto:muhamedslab@gmail.com"> <span>Send us an email  <br /> with a screenshot of your items</span></a>
                </button>
                {/* <button
                  className="w-full py-4 flex items-center justify-center space-x-3 rounded-xl bg-linear-to-r from-yellow-500 to-yellow-600 cursor-pointer font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
                  onClick={() => alert("Proceed to Stripe Checkout")}
                >
                  <CreditCard size={20} />
                  <span>Payment method with Stripe</span>
                </button>
               
                <button
                  className="w-full py-4 flex items-center justify-center space-x-3 rounded-xl bg-[#003087] cursor-pointer font-semibold hover:bg-[#001f5c] transition-all shadow-lg hover:shadow-xl"
                  onClick={() => alert("Proceed to PayPal Checkout")}
                >
               
                  <Wallet size={20} />
                 <span>Payment method with PayPal</span>
                </button> */}
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear your entire cart?"))
                      clearCart();
                  }}
                  className="w-full py-3 bg-red-500/20 text-red-700 rounded-xl hover:bg-red-500/30 cursor-pointer font-medium transition-colors border border-red-500/30"
                >
                  Clear Entire Cart
                </button>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-4 border-t  text-center" style={{color: themeStyle.hex }}>
                <p className="text-sm flex items-center justify-center space-x-2">
                  <span>🔒</span>
                  <span>Secure checkout · Encrypted payment</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;