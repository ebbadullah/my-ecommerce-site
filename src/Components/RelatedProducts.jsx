import { useContext, useState } from 'react';
import { ProductContext } from '../ProductContext/ProductContext';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { productTabs } from '../assets';



const RelatedProducts = ({ currentProduct }) => {
  const { getProduct } = useContext(ProductContext);
  const [activeTab, setActiveTab] = useState("details");

  const relatedProducts = getProduct.filter(
    (product) =>
      product.id !== currentProduct.id &&
      product.category === currentProduct.category &&
      product.type === currentProduct.type
  ).slice(0, 4);

  return (
    <div className="w-full px-8 md:px-16 lg:px-22 h-auto my-12 flex flex-wrap gap-6">
      <h2 className="text-2xl font-bold text-gray-800 w-full mb-4">Related Products</h2>
      <div className="w-3/4 flex gap-9 justify-between">
        {relatedProducts.map((product) => (
          <Link
            to={`/productdetailpage/${product.id}`}
            onClick={() => window.scrollTo(0, 0)}
            state={{ product }}
            key={product.id}
            style={{ textDecoration: 'none' }}
            className="w-[22%] cursor-pointer"
          >
            <div>
            <img
    src={Array.isArray(product.images) ? product.images[0] : product.images}
    alt={product.name}
    className="w-full h-[300px] object-cover"
  />
              <h1 className="font-medium text-[18px] text-gray-700 mt-2">
                {product.name}
              </h1>
              <p className="text-[17px] text-gray-500">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tabs Section */}
      <div className="p-9 mt-4  w-full">
        <div className="flex justify-center  flex-col">
        <div className="flex justify-center  pb-2 mb-4 gap-4">
  {productTabs.map(tab => (
    <button
      key={tab.id}
      className={`px-6 py-2 text-lg border-2  rounded-full transition-all ${
        activeTab === tab.id 
          ? "border-black text-black font-semibold bg-gray-200" 
          : "border-gray-300 text-gray-600 hover:text-black"
      }`}
      onClick={() => setActiveTab(tab.id)}
    >
      {tab.name}
    </button>
  ))}
</div>

          <div className="text-gray-700  space-y-4 w-full h-full">
  <p className="text-3xl font-bold text-center mb-4">
    {productTabs.find(tab => tab.id === activeTab)?.name}
  </p>
  {activeTab === "reviews" ? (
    <div className="space-y-6">
      {productTabs.find(tab => tab.id === "reviews").content.map((review, index) => (
        <div key={index} className="flex items-start gap-4 pb-3">
          <img 
            src={currentProduct.img} 
            alt="User Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{review.user}</h3>
            <div className="flex text-yellow-500">
              {Array(Math.floor(review.rating)).fill(<FaStar />)}
              {review.rating % 1 !== 0 && <FaStarHalfAlt />}
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-left">{productTabs.find(tab => tab.id === activeTab)?.content}</p>
  )}
</div>


        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
