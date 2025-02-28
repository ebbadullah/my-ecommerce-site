"use client"
import { useContext } from "react"
import { InfoData } from "../assets"
import { ProductContext } from "../ProductContext/ProductContext"
import { Link } from "react-router-dom"
import { useTheme } from "../ProductContext/ThemeContext"

const Card = () => {
  const { theme } = useTheme()
  const { getProduct } = useContext(ProductContext)

  return (
    <>
      <div
        className={`w-full px-4 sm:px-8 md:px-16 lg:px-22 h-auto my-12 flex flex-col sm:flex-row gap-6 ${
          theme === "default"
            ? "bg-[#FFFFFF] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
            : "bg-[#EDE0D4] text-[#3E2723]"
        }`}
      >
        {/* InfoCard */}
        <div className="w-full sm:w-1/4 relative">
          <img
            src={InfoData[1].img || "/placeholder.svg"}
            alt=""
            className="w-full h-[390px] object-cover rounded-md border-1 border-black"
          />
          {/* Text Overlay (Always Visible) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-[18px] font-bold text-[#3E2723]">SUMMER SALE</h2>
            <h1 className="text-3xl font-bold text-[#3E2723]">UP TO 70%</h1>
            <p className="text-gray-900">Shop NOW</p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="w-full sm:w-3/4 flex flex-wrap gap-6">
          {getProduct.slice(0, 4).map((product, index) => (
            <Link
              to={`/productdetailpage/${product.id}`}
              onClick={() => window.scrollTo(0, 0)}
              state={{ product }}
              key={product.id}
              style={{ textDecoration: "none" }}
              className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] ${
                index === 0 ? "block" : "hidden sm:block"
              }`}
            >
              <div className="w-full cursor-pointer">
                <img
                  src={Array.isArray(product.images) ? product.images[0] : product.images}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
                <h1 className="font-medium text-[18px] mt-2">{product.name}</h1>
                <p className="text-[16px]">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Card

