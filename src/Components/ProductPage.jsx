"use client"

import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ProductContext } from "../ProductContext/ProductContext"
import { Loader2, Filter } from "lucide-react"
import { useTheme } from "../ProductContext/ThemeContext"

const ProductPage = () => {
  const { getProduct, isLoading } = useContext(ProductContext)
  const { theme } = useTheme()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [sortOrder, setSortOrder] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const filteredProducts = getProduct.filter((product) => {
    return (
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  switch (sortOrder) {
    case "lowToHigh":
      filteredProducts.sort((a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price))
      break
    case "highToLow":
      filteredProducts.sort((a, b) => Number.parseFloat(b.price) - Number.parseFloat(a.price))
      break
    default:
      break
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin h-16 w-16 text-blue-500" />
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen ${theme === "default" ? "bg-gray-100 text-black" : theme === "light" ? "bg-white text-[black]" : "bg-[#EDE0D4] text-[#22191A]"}`}
    >
      <div className="w-full flex flex-col sm:flex-row sm:space-x-2 md:space-x-4 lg:space-x-6 px-4 sm:px-8 md:px-12 lg:px-16 py-4 justify-between items-center">
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
          <h3 className="font-bold text-center py-2 sm:py-4">DEPARTMENTS</h3>
        </div>
        <div className="relative w-full sm:w-3/4">
          <input
            type="text"
            placeholder="Search entire store here..."
            className={`w-full placeholder:text-[#5D4037] px-3 sm:px-4 md:px-7 py-2 sm:py-3 md:py-4 border rounded-md text-sm focus:outline-none transition-transform duration-300 ${
              theme === "default"
                ? "bg-white text-black placeholder:text-black"
                : "bg-[#D7CCC8] text-gray-700 border-[#A67B5B] placeholder:text-gray-500"
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:space-x-6 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden w-full flex justify-between items-center mb-4">
          <h3 className="font-bold text-xl sm:text-2xl">Products</h3>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-1 px-3 py-2 border rounded-md"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters - Mobile Collapsible, Desktop Always Visible */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-1/4 shadow-lg mb-6 lg:mb-0`}>
          <h3 className="font-bold text-xl sm:text-2xl text-center mb-2 sm:mb-4">Filter</h3>
          <div className="space-y-4 mt-4 sm:mt-8 lg:mt-14">
            <div className="border-2 rounded-md p-3 sm:p-4 m-2 sm:m-3">
              <h4 className="font-semibold ml-4 sm:ml-8 lg:ml-12 text-base sm:text-lg mt-2 sm:mt-5">Categories</h4>
              {["Men", "Women", "Kids", "Baby"].map((category) => (
                <label key={category} className="block ml-4 sm:ml-8 lg:ml-12">
                  <input
                    type="checkbox"
                    className="mr-2 mt-3"
                    onChange={() => handleCategoryChange(category)}
                    checked={selectedCategories.includes(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
            <div className="border-2 rounded-md p-3 sm:p-4 m-2 sm:m-3">
              <h4 className="font-semibold ml-4 sm:ml-8 lg:ml-12 text-base sm:text-lg mt-2 sm:mt-5">Types</h4>
              {["T-shirts", "Jackets", "Shoes", "Accessories", "Dresses", "Skirts"].map((type) => (
                <label key={type} className="block ml-4 sm:ml-8 lg:ml-12">
                  <input
                    type="checkbox"
                    className="mr-2 mt-3"
                    onChange={() => handleTypeChange(type)}
                    checked={selectedTypes.includes(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="hidden lg:flex justify-between items-center mb-6">
            <h3 className="font-bold text-2xl sm:text-3xl">Products</h3>
            <select
              className="border px-3 sm:px-4 py-1 sm:py-2 rounded-md text-sm"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort Prices</option>
              <option value="lowToHigh">Price - Low to High</option>
              <option value="highToLow">Price - High to Low</option>
            </select>
          </div>

          {/* Mobile Sort */}
          <div className="flex lg:hidden justify-end mb-4">
            <select className="border px-3 py-1 rounded-md text-sm" onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">Sort Prices</option>
              <option value="lowToHigh">Price - Low to High</option>
              <option value="highToLow">Price - High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.slice(0, 8).map((product) => (
              <Link
                to={`/productdetailpage/${product.id}`}
                onClick={() => scrollTo(0, 0)}
                state={{ product }}
                key={product.id}
                style={{ textDecoration: "none" }}
              >
                <div className="product-card cursor-pointer flex-1 w-full mb-4 sm:mb-6 p-3 sm:p-4 border rounded-md hover:shadow-md transition-shadow duration-300">
                  <img
                    src={Array.isArray(product.images) ? product.images[0] : product.images}
                    alt={product.name}
                    className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover"
                  />
                  <h3 className="text-base sm:text-lg font-semibold mt-2">{product.name}</h3>
                  <p className="text-sm sm:text-md font-medium mt-1">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

