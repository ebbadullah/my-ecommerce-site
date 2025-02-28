"use client";

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { ChevronLeft, ChevronRight, Trash, Edit, Search, Filter, MoreVertical, AlertCircle, Loader } from 'lucide-react';
import { db } from "../Firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ProductOverview() {
  const productContext = useContext(ProductContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  if (!productContext) {
    return (
      <div className="flex items-center justify-center h-[50vh] text-red-500">
        <AlertCircle className="w-5 h-5 mr-2" />
        <span>Error: ProductContext is not available.</span>
      </div>
    );
  }

  const { getProduct, isLoading } = productContext;

  // Filter and search products
  const filteredProducts = getProduct.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Ecommerce", id));
      setShowDeleteConfirm(null);
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  // Get unique categories
  const categories = ["all", ...new Set(getProduct.map(p => p.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Product Overview</h2>
            <button
              onClick={() => navigate("/add-product")}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Add New Product
            </button>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500
                         focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500
                         focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500
                         focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              >
                {[5, 10, 20, 50].map(value => (
                  <option key={value} value={value}>
                    Show {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 bg-gray-50 text-gray-600 font-medium">Product</th>
                  <th className="text-left py-4 px-6 bg-gray-50 text-gray-600 font-medium">ID</th>
                  <th className="text-left py-4 px-6 bg-gray-50 text-gray-600 font-medium">Price</th>
                  <th className="text-left py-4 px-6 bg-gray-50 text-gray-600 font-medium hidden sm:table-cell">Category</th>
                  <th className="text-left py-4 px-6 bg-gray-50 text-gray-600 font-medium hidden lg:table-cell">Subcategory</th>
                  <th className="text-right py-4 px-6 bg-gray-50 text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8">
                      <Loader className="w-6 h-6 animate-spin mx-auto text-blue-600" />
                      <p className="mt-2 text-gray-500">Loading products...</p>
                    </td>
                  </tr>
                ) : currentProducts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8">
                      <p className="text-gray-500">No products found</p>
                    </td>
                  </tr>
                ) : (
                  currentProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={Array.isArray(product.images) ? product.images[0] : product.images}
                            alt={product.name}
                            className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                            onError={(e) => { e.target.src = "/placeholder.svg"; }}
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">SKU: {product.id.slice(0, 8)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">#{product.id.slice(0, 6)}</td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-900">${product.price}</span>
                      </td>
                      <td className="py-4 px-6 hidden sm:table-cell text-gray-600">
                        {product.category || "N/A"}
                      </td>
                      <td className="py-4 px-6 hidden lg:table-cell text-gray-600">
                        {product.subCategory || "N/A"}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(product.id)}
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setShowDeleteConfirm(product.id)}
                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} entries
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 
                           hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors
                      ${currentPage === index + 1
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 
                           hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900">Delete Product</h3>
            <p className="mt-2 text-gray-600">
              Are you sure you want to delete this product? This action cannot be undone.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}