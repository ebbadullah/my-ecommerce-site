"use client"

import { Link } from "react-router-dom"
import React from "react"
import { FaUser, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"
import { useUser, useClerk, UserButton } from "@clerk/clerk-react"
import { navbar } from "../assets"
import { useTheme } from "../ProductContext/ThemeContext"
import { Button } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"
import { DrawerDefault } from "./Drawer"
import { useLocation } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isOpen, setIsOpen] = React.useState(false)
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex justify-between items-center py-4 sm:py-5 md:py-6 px-4 sm:px-6 lg:px-[80px] xl:px-[120px] ${
          theme === "default"
            ? "bg-[#F6F6F8] text-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
            : "text-[#FFEE58] bg-[#4E342E] relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        }`}
      >
        {["/admin", "/orders", "/reports", "/dashboard"].includes(location.pathname) && (
          <div>
            <DrawerDefault />
          </div>
        )}
        <div className="flex items-center">
          <button className="sm:hidden block" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <ul
            className={`flex flex-col sm:flex-row gap-5 sm:gap-7 sm:static absolute top-[72px] left-0 ${
              theme === "default" ? "bg-[#F6F6F8]" : "bg-[#4E342E]"
            } w-full sm:w-auto p-5 sm:p-0 transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
            } z-40`}
          >
            {navbar.map((item, index) => (
              <li
                className={`font-medium hover:text-[#D4AF37] duration-300 ${
                  item.lable === "BuyNow"
                    ? "text-red-500 font-bold"
                    : theme === "default"
                      ? "text-black"
                      : "text-[#E79F1C]"
                }`}
                key={index}
              >
                <Link to={item.path}>{item.lable}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {user ? (
            <>
              <UserButton />
              <p className="hidden sm:block font-semibold uppercase cursor-pointer">{user.fullName}</p>
            </>
          ) : (
            <>
              <FaUser onClick={openSignIn} className="cursor-pointer" size={20} />
              <span className="cursor-pointer text-md hidden sm:inline" onClick={openSignIn}>
                Login
              </span>
            </>
          )}

          <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
            {theme === "default" ? (
              <FaMoon size={20} className="text-black" />
            ) : (
              <FaSun size={20} className="text-yellow-400" />
            )}
          </div>
          <div className="hidden sm:block">
            <Button onClick={() => navigate("/admin")} className="bg-black text-xs sm:text-sm">
              Admin
            </Button>
          </div>
        </div>
      </nav>

      {/* Drawer Full-Screen Effect */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Padding dynamically changes with theme */}
      <div className={` transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}>{/* Your main content */}</div>
    </>
  )
}

export default Navbar

