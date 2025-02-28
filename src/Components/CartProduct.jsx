import React, { useContext, useEffect } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { FaTimes, FaTrash, FaShoppingBag, FaMinus, FaPlus } from "react-icons/fa";
import { useTheme } from "../ProductContext/ThemeContext";

const CartProductDrawer = ({ isOpen, onClose }) => {
  const { cartItem, getProduct, removeFromCart, updateQuantity } = useContext(ProductContext);
  const { theme } = useTheme();

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getCartProducts = () => {
    if (getProduct.length === 0) return [];
    return Object.keys(cartItem)
      .map(id => {
        const product = getProduct.find(item => item.id === id);
        if (!product) return null;
        return { ...product, sizes: cartItem[id] };
      })
      .filter(Boolean);
  };

  const calculateTotal = () => {
    return getCartProducts().reduce((total, product) => {
      const productTotal = Object.values(product.sizes).reduce(
        (sum, quantity) => sum + quantity * product.price,
        0
      );
      return total + productTotal;
    }, 0);
  };

  const cartProducts = getCartProducts();
  const total = calculateTotal();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full xs:w-[380px] sm:w-[420px] lg:w-[480px] 
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          ${theme === "default" ? "bg-white" : "bg-gray-900"}
          z-50 shadow-2xl`}
      >
        {/* Header */}
        <div className={`p-4 sm:p-6 flex items-center justify-between border-b
          ${theme === "default" ? "bg-gray-50 border-gray-100" : "bg-gray-800 border-gray-700"}
          sticky top-0 z-10`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <FaShoppingBag className={`w-6 h-6 ${theme === "default" ? "text-gray-800" : "text-gray-200"}`} />
              {cartProducts.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {cartProducts.length}
                </span>
              )}
            </div>
            <div>
              <h2 className={`text-lg font-bold ${theme === "default" ? "text-gray-900" : "text-white"}`}>
                Shopping Cart
              </h2>
              <p className={`text-sm ${theme === "default" ? "text-gray-500" : "text-gray-400"}`}>
                {cartProducts.length} {cartProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 
              transition-colors duration-200 active:scale-95
              ${theme === "default" ? "text-gray-500" : "text-gray-400"}`}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="h-[calc(100vh-180px)] overflow-y-auto">
          <div className="p-4 sm:p-6 space-y-4">
            {getProduct.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[60vh]">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin" />
                <p className="mt-4 text-gray-500 font-medium">Loading your cart...</p>
              </div>
            ) : cartProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[60vh] px-4 text-center">
                <FaShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${theme === "default" ? "text-gray-900" : "text-white"}`}>
                  Your cart is empty
                </h3>
                <p className={`text-sm ${theme === "default" ? "text-gray-500" : "text-gray-400"}`}>
                  Looks like you haven't added anything to your cart yet
                </p>
                <button 
                  onClick={onClose}
                  className="mt-6 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                           rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartProducts.map(product => (
                <div 
                  key={product.id} 
                  className={`group relative flex gap-4 p-4 rounded-xl transition-all duration-200
                    ${theme === "default" 
                      ? "bg-gray-50 hover:bg-gray-100" 
                      : "bg-gray-800/50 hover:bg-gray-800"}`}
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                    <img 
                      src={product.images[0] || "/placeholder.svg"} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-medium line-clamp-2 ${
                          theme === "default" ? "text-gray-900" : "text-white"
                        }`}>
                          {product.name}
                        </h3>
                        <p className={`mt-1 text-sm font-semibold ${
                          theme === "default" ? "text-gray-900" : "text-white"
                        }`}>
                          ${product.price}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(product.id, Object.keys(product.sizes)[0])}
                        className="p-2 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 
                                 transition-colors duration-200"
                        aria-label="Remove item"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>

                    {/* Size and Quantity Controls */}
                    <div className="mt-3 space-y-2">
                      {Object.entries(product.sizes).map(([size, quantity]) => (
                        <div key={size} className="flex items-center justify-between">
                          <span className={`text-sm ${
                            theme === "default" ? "text-gray-600" : "text-gray-300"
                          }`}>
                            Size {size}
                          </span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity?.(product.id, size, quantity - 1)}
                              disabled={quantity <= 1}
                              className={`w-8 h-8 rounded-full flex items-center justify-center 
                                transition-all duration-200 disabled:opacity-50
                                ${theme === "default" 
                                  ? "hover:bg-gray-200 text-gray-600 disabled:hover:bg-transparent" 
                                  : "hover:bg-gray-700 text-gray-300 disabled:hover:bg-transparent"}`}
                            >
                              <FaMinus size={12} />
                            </button>
                            <span className={`w-8 text-center ${
                              theme === "default" ? "text-gray-900" : "text-white"
                            }`}>
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity?.(product.id, size, quantity + 1)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center 
                                transition-all duration-200
                                ${theme === "default" 
                                  ? "hover:bg-gray-200 text-gray-600" 
                                  : "hover:bg-gray-700 text-gray-300"}`}
                            >
                              <FaPlus size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer with Total and Checkout */}
        {cartProducts.length > 0 && (
          <div className={`border-t ${
            theme === "default" ? "border-gray-100" : "border-gray-800"
          } p-4 sm:p-6 sticky bottom-0 bg-inherit`}>
            <div className="space-y-4">
              {/* Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={theme === "default" ? "text-gray-500" : "text-gray-400"}>
                    Subtotal
                  </span>
                  <span className={theme === "default" ? "text-gray-900" : "text-white"}>
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={theme === "default" ? "text-gray-500" : "text-gray-400"}>
                    Shipping
                  </span>
                  <span className={theme === "default" ? "text-gray-900" : "text-white"}>
                    Calculated at checkout
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center border-t pt-4">
                <span className={`font-medium ${
                  theme === "default" ? "text-gray-900" : "text-white"
                }`}>
                  Total
                </span>
                <span className="text-xl font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                               rounded-full font-medium hover:opacity-90 transition-all duration-200 
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 
                               dark:focus:ring-white active:scale-[0.98]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartProductDrawer;