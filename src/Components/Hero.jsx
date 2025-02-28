"use client"

import { Images } from "../assets"
import { departments } from "../assets"
import { useState } from "react"
import { useTheme } from "../ProductContext/ThemeContext"

const Hero = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <div
      className={`flex flex-col relative ${
        theme === "default"
          ? "bg-white text-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
          : "bg-[#EDE0D4] text-[#3E2723]"
      }`}
    >
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-3 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 space-y-4 sm:space-y-5 lg:space-y-0">
        {/* Left Section: Departments */}
        <div className="w-full lg:w-1/4 lg:max-w-[300px]">
          <div className="flex justify-between items-center lg:block">
            <h3
              className={`font-bold text-sm sm:text-base md:text-lg text-center py-3 sm:py-4 w-full ${
                theme === "default" ? "bg-[#01BAD4] text-white" : "bg-[#E79F1C] text-[#5D4037]"
              }`}
            >
              DEPARTMENTS
            </h3>
          </div>
          <ul className="hidden lg:block space-y-0 divide-y">
            {departments.map((item, index) => (
              <li
                key={index}
                className={`border py-2 px-3 sm:px-4 text-sm sm:text-base transition-colors duration-200 hover:bg-gray-50 ${
                  theme === "default" ? "border-grey-600" : "border-gray-600"
                }`}
              >
                {item.text}
                {item.badge && (
                  <span className={`${item.badgeColor} font-bold ml-2 text-xs sm:text-sm`}>{item.badge}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/4 flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:pl-6">
          {/* Search Bar Section */}
          <div className="relative flex items-center justify-end lg:justify-start">
            <input
              type="text"
              placeholder="Search entire store here..."
              className={`w-full placeholder:text-[#5D4037] px-3 sm:px-4 md:px-7 py-2 sm:py-3 md:py-4 border rounded-md text-sm focus:outline-none transition-all duration-300 ${
                theme === "default"
                  ? "bg-white text-black placeholder:text-black"
                  : "bg-[#D7CCC8] text-gray-700 border-[#A67B5B] placeholder:text-gray-500"
              } ${isSearchOpen ? "block" : "hidden lg:block"}`}
            />
            <button className="lg:hidden text-gray-700 text-xl p-2" onClick={() => setIsSearchOpen(true)}>
              🔍
            </button>
          </div>

          {/* Mobile Search Overlay */}
          {isSearchOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center pt-16 px-4 z-50"
              onClick={() => setIsSearchOpen(false)}
            >
              <div className="bg-white p-4 sm:p-6 rounded-md w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
                <input
                  type="text"
                  placeholder="Search entire store here..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md text-sm focus:outline-none"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Images Section */}
          <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 space-y-4 md:space-y-0">
            {/* Big Image */}
            <div className="relative w-full md:w-2/3 overflow-hidden rounded-lg">
              <img
                src={Images.banner1 || "/placeholder.svg"}
                alt="Banner 1"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-4 sm:p-6 md:p-8 lg:p-9 text-white bg-gradient-to-r from-black/30 to-transparent">
                <h2 className="text-base sm:text-lg md:text-xl font-medium">Beautiful 2023</h2>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-1 sm:pt-2 md:pt-3 font-bold">
                  NEW ARRIVALS
                </h1>
                <button className="mt-3 sm:mt-4 border-2 border-white text-white py-1.5 sm:py-2 px-3 sm:px-4 md:px-6 rounded-full text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black">
                  Discover now
                </button>
              </div>
            </div>

            {/* Small Image */}
            <div className="relative w-full md:w-1/3 overflow-hidden rounded-lg">
              <img
                src={Images.banner2 || "/placeholder.svg"}
                alt="Banner 2"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-3 sm:px-4 py-2 rounded backdrop-blur-sm">
                <h3 className="text-xs sm:text-sm md:text-base font-medium">Top view in this week</h3>
                <h2 className="text-sm sm:text-base md:text-lg font-bold">TRENDING</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

