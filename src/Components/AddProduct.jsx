import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [images, setImages] = useState(["", "", "", ""]);
  const [selectedSizes, setSelectedSizes] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState(""); 
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(""); 
  const [features, setFeatures] = useState(""); // Features string

  // Firebase Product Object
  const product = {
    name: productName,
    category: category,
    subCategory: subCategory,
    description: description,
    features: features,
    images: images, 
    sizes: selectedSizes.split(",").map(size => size.trim()), // Convert sizes string to array
    price: price,
  };
  const navigatee = useNavigate(); // Step 2: Initialize navigate function

  async function postProduct() {
    try {
      const docRef = await addDoc(collection(db, "Ecommerce"), product);
      console.log("Product added with ID: ", docRef.id);
      navigatee("/product");  // Step 3: Navigate to ProductPage after successful addition
    } catch (e) {
      console.error("Error adding product: ", e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct();

    // Reset form after submission
    setProductName("");
    setCategory("");
    setSubCategory("");
    setDescription("");
    setPrice("");
    setFeatures("");
    setImages(["", "", "", ""]);
    setSelectedSizes("");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left side: Product Form */}
      <form className="space-y-6" onSubmit={handleSubmit} onClick={() => nevigate("/")}  >
        <div className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium block">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter product name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="category" className="text-sm font-medium block">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="subCategory" className="text-sm font-medium block">
                Sub Category
              </label>
              <input
                id="subCategory"
                type="text"
                placeholder="Enter sub category"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="sizes" className="text-sm font-medium block">
              Sizes
            </label>
            <input
              id="sizes"
              type="text"
              placeholder="Enter sizes (comma-separated, e.g., S,L,M)"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={selectedSizes}
              onChange={(e) => setSelectedSizes(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="price" className="text-sm font-medium block">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter price"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Description Field */}
          <div className="space-y-1">
            <label htmlFor="description" className="text-sm font-medium block">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter product description"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Features Field */}
          <div className="space-y-1">
            <label htmlFor="features" className="text-sm font-medium block">
              Features
            </label>
            <textarea
              id="features"
              placeholder="Enter product features (comma-separated)"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium block">Product Images (4 URLs):</label>
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <input
                  key={index}
                  type="url"
                  placeholder={`Image URL ${index + 1}`}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={image}
                  onChange={(e) => {
                    const newImages = [...images];
                    newImages[index] = e.target.value;
                    setImages(newImages);
                  }}
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md"
               >
            Add Product
          </button>
        </div>
      </form>

      {/* Right side: Product Overview */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-md">
        <h3 className="text-lg font-medium mb-4">Product Preview</h3>
        
        <div className="space-y-3">
          <p><strong>Name:</strong> {productName || "N/A"}</p>
          <p><strong>Category:</strong> {category || "N/A"}</p>
          <p><strong>Sub Category:</strong> {subCategory || "N/A"}</p>
          <p><strong>Sizes:</strong> {selectedSizes || "N/A"}</p>
          <p><strong>Price:</strong> {price ? `PKR ${price}` : "N/A"}</p>
          <p><strong>Description:</strong> {description || "N/A"}</p>
          <p><strong>Features:</strong> 
            <ul className="list-disc pl-5">
              {features.split(",").map((feature, index) => (
                <li key={index}>{feature.trim()}</li>
              ))}
            </ul>
          </p>
          <p><strong>Images:</strong></p>
          <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              image && (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-32 object-cover border"
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
