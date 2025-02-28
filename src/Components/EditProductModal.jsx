import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../Firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FiSave, FiX, FiImage, FiTrash2, FiLoader, FiAlertCircle } from "react-icons/fi";

export default function EditProductModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [images, setImages] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productRef = doc(db, "Ecommerce", id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          const data = productSnap.data();
          setProduct(data);
          setName(data.name || "");
          setPrice(data.price || "");
          setCategory(data.category || "");
          setSubcategory(data.subcategory || "");
          setImages(data.images || ["", "", "", ""]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  const handleUpdate = async () => {
    try {
      setSaving(true);
      const productRef = doc(db, "Ecommerce", id);
      await updateDoc(productRef, {
        name,
        price,
        category,
        subcategory,
        images: images.filter(img => img !== ""),
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="text-center space-y-3">
          <FiLoader className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
          <p className="text-gray-600 font-medium">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="text-center space-y-3">
          <FiAlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <p className="text-gray-900 font-semibold text-lg">Product not found</p>
          <button 
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Edit Product</h2>
            <button 
              onClick={() => navigate("/dashboard")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-4 mt-6">
            {["basic", "images"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors
                  ${activeTab === tab 
                    ? "bg-gray-900 text-white" 
                    : "text-gray-600 hover:bg-gray-100"}`}
              >
                {tab === "basic" ? "Basic Info" : "Images"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-2xl shadow-sm border border-t-0 border-gray-200 p-6">
          {activeTab === "basic" ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                  placeholder="Enter product name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Enter price"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Enter category"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Subcategory</label>
                <input
                  type="text"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                  placeholder="Enter subcategory"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {images.map((img, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">
                        Image {index + 1}
                      </label>
                      {img && (
                        <button
                          onClick={() => {
                            const newImages = [...images];
                            newImages[index] = "";
                            setImages(newImages);
                          }}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={img}
                        onChange={(e) => {
                          const newImages = [...images];
                          newImages[index] = e.target.value;
                          setImages(newImages);
                        }}
                        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 
                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                                 transition-all outline-none"
                        placeholder="Enter image URL"
                      />
                      <FiImage className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                    </div>
                    {img && (
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-4 mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 
                     rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={saving}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium 
                     rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                     flex items-center space-x-2"
          >
            {saving ? (
              <>
                <FiLoader className="w-4 h-4 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <FiSave className="w-4 h-4" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}