"use client"

import { Images } from "../assets"
import { FaRegHeart, FaShoppingBasket, FaPhone } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../ProductContext/ThemeContext"
import { useContext, useState } from "react"
import { ProductContext } from "../ProductContext/ProductContext"
import CartProductDrawer from "../Components/CartProduct" // Import Drawer

const Navbar2 = () => {
  const { theme } = useTheme()
  const { getCartCount } = useContext(ProductContext)
  const [isCartOpen, setIsCartOpen] = useState(false) // State to open/close drawer
  const navigate = useNavigate()

  return (
    <>
      <div
        className={`flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-2 sm:py-3 ${
          theme === "default"
            ? "bg-[#FFFFFF] "
            : "bg-[#6D4C41] text-[#FFD700] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        }`}
      >
        <img
          onClick={() => navigate("/")}
          src={Images.logo || "/placeholder.svg"}
          alt="Logo"
          className="w-28 sm:w-32 md:w-36 lg:w-44 cursor-pointer"
        />

        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          {/* Phone number - Hidden on mobile, shown from sm up */}
          <div className="hidden sm:flex items-center space-x-1">
            <FaPhone
              className={`hidden sm:block size-3 md:size-4 ${theme === "default" ? "text-black" : "text-[#E79F1C]"}`}
            />
            <button
              className={`${theme === "default" ? "text-black" : "text-[#E79F1C]"} text-xs sm:text-sm md:text-base`}
            >
              <span className="hidden md:inline">Call Us: </span>
              <b>+842437955813</b>
            </button>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <button className={`${theme === "default" ? "text-black" : "text-[#E79F1C]"}`}>
              <FaRegHeart className="size-4 sm:size-5" />
            </button>

            {/* Basket Icon with Drawer Toggle */}
            <button
              className={`relative ${theme === "default" ? "text-black" : "text-[#E79F1C]"}`}
              onClick={() => setIsCartOpen(true)}
            >
              <FaShoppingBasket className="size-4 sm:size-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full text-[10px] sm:text-xs">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Cart Drawer Component */}
      <CartProductDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Navbar2

