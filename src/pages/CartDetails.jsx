"use client"

import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { FiHeart, FiShoppingBag, FiShare2, FiZoomIn } from "react-icons/fi"
import { Loader2 } from "lucide-react"
import Icons from "../Components/Icons"
import Navbar2 from "../Components/Navbar2"
import { ProductContext } from "../ProductContext/ProductContext"
import RelatedProducts from "../Components/RelatedProducts"
import { toast } from "react-toastify"

const ProductDetailPage = () => {
  const { id } = useParams()
  const { getProduct, isLoading, addToCart } = useContext(ProductContext)
  const [selectedSize, setSelectedSize] = useState(null)
  const [mainImage, setMainImage] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)
  const [showSizeGuide, setShowSizeGuide] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const product = getProduct.find((item) => item.id === id)

  useEffect(() => {
    if (product && product.images?.length) {
      setMainImage(product.images[0])
    }

    const handleScroll = () => {
      const offset = window.scrollY
      setIsSticky(offset > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [product])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="text-center">
          <Loader2 className="animate-spin h-16 w-16 text-gray-900 mx-auto" />
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart", {
        position: "bottom-right",
        style: { background: "#F87171", color: "white" },
      })
      return
    }
    addToCart(product.id, selectedSize, quantity)
    toast.success(`${quantity} ${product.name} added to cart`, {
      position: "bottom-right",
      style: { background: "#10B981", color: "white" },
    })
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } catch (err) {
      toast.info("Sharing is not supported on this device")
    }
  }

  // Parse sizes and features
  const productSizes = Array.isArray(product?.sizes)
    ? product.sizes
    : (product?.sizes || "")
        .split(",")
        .map((size) => size.trim())
        .filter(Boolean)

  const productFeatures = product.features
    ? typeof product.features === "string"
      ? product.features
          .split(",")
          .map((feature) => feature.trim())
          .filter(Boolean)
      : product.features
    : []

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Product section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image gallery */}
            <div className="space-y-4">
              {/* Main image with zoom */}
              <div
                className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 group"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <img
                  src={mainImage || "/placeholder.svg"}
                  alt={product.name}
                  className={`h-[800px] w-full object-cover object-center transition-transform duration-500 ${
                    isZoomed ? "scale-110" : "scale-100"
                  }`}
                />
                <button
                  className="absolute bottom-4 right-4 p-2 bg-white/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <FiZoomIn className="h-5 w-5 text-gray-900" />
                </button>
              </div>

              {/* Image thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {product?.images?.map((img, index) => (
                  <button
                    key={index}
                    className={`relative aspect-square overflow-hidden rounded-lg transition-all ${
                      mainImage === img ? "ring-2 ring-gray-900 ring-offset-2" : "hover:opacity-75"
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - view ${index + 1}`}
                      className="h-[100px] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product details */}
            <div className={`flex flex-col space-y-6 ${isSticky ? "lg:sticky lg:top-8" : ""}`}>
              {/* Product info */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{product.name}</h1>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900">${product.price}</p>
              </div>

              {/* Product description */}
              <div className="prose prose-sm sm:prose max-w-none text-gray-600">
                <p>{product.description}</p>
              </div>

              {/* Product features */}
              {productFeatures.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Key Features</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {productFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Size selector */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
                  <button
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                  >
                    Size guide
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {productSizes.map((size) => (
                    <button
                      key={size}
                      className={`group relative flex items-center justify-center rounded-lg border-2 py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none transition-all duration-200 ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-200 text-gray-900 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center space-x-4">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium">{quantity}</span>
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-lg hover:bg-gray-800 
                           transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium
                           focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  onClick={handleAddToCart}
                >
                  <FiShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>
                <button
                  className="flex-none sm:flex-none border-2 border-gray-200 text-gray-900 px-6 py-4 
                           rounded-lg hover:border-gray-300 transition-all duration-200 
                           flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <FiHeart className="h-5 w-5" />
                  <span className="hidden sm:inline">Save</span>
                </button>
                <button
                  className="flex-none sm:flex-none border-2 border-gray-200 text-gray-900 px-6 py-4 
                           rounded-lg hover:border-gray-300 transition-all duration-200 
                           flex items-center justify-center gap-2 text-sm font-medium"
                  onClick={handleShare}
                >
                  <FiShare2 className="h-5 w-5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>

              {/* Additional info */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free shipping on orders over $100
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  30-day easy returns
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <RelatedProducts currentProduct={product} />
          </div>
        </div>
      </div>

      <Icons />
    </>
  )
}

export default ProductDetailPage

