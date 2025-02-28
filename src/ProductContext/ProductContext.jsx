// import React, { createContext, useState } from "react";
// import {  Products1 } from "../assets";

// export const ProductContext = createContext();  // Make sure to export it

// export const ProductProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [getProduct, setProducts] = useState(Products1)


//   const value = { isLoading, getProduct, setIsLoading, setProducts };

//   return (
//     <ProductContext.Provider value={value}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;






// Working Here

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [getProduct, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState({});

  // Fetch products from Firebase Firestore
  async function fetchProducts() {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "Ecommerce"));
      const productsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArray);
    } catch (error) {
      console.error("Error fetching products: ", error);
      toast.error("Error fetching products");
    } finally {
      setIsLoading(false);
    }
  }

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Get total cart count
  const getCartCount = () => {
    return Object.keys(cartItem).length; // Count only unique products, not sizes
  };
  

  // Add to cart functionality
  const addToCart = (id, size) => {
    let cartItemCopy = { ...cartItem };
  
    if (!size) {
      toast.error("Please select a size before adding to cart");
      return;
    }
  
    // If product already in cart, just add/keep all sizes instead of replacing
    if (cartItemCopy[id]) {
      cartItemCopy[id][size] = (cartItemCopy[id][size] || 0) + 1;
    } else {
      cartItemCopy[id] = { [size]: 1 };
    }
  
    setCartItem(cartItemCopy);
    toast.success("Item added to cart with selected size");
  };
  

  // Remove item from cart
  const removeFromCart = (id, size) => {
    let cartItemCopy = { ...cartItem };
    if (cartItemCopy[id] && cartItemCopy[id][size]) {
      cartItemCopy[id][size] -= 1;
      if (cartItemCopy[id][size] === 0) {
        delete cartItemCopy[id][size];
        if (Object.keys(cartItemCopy[id]).length === 0) {
          delete cartItemCopy[id];
        }
      }
      setCartItem(cartItemCopy);
      toast.info("Item removed from cart");
    }
  };

  // Context value
  const value = {
    isLoading,
    getProduct,
    cartItem,
    addToCart,
    removeFromCart,
    getCartCount,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;





// Working Here 









// import React, { createContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { collection, getDocs } from "firebase/firestore"; // Firestore imports
// import { db } from "../Firebase/firebase"; // Firebase config import

// export const ProductContext = createContext(); 

// export const ProductProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [getProduct, setProducts] = useState([]);
//   const [cartItem, setCartItem] = useState({}); // Cart state

//   // Fetch products from Firebase Firestore
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true); // Start loading
//       try {
//         const querySnapshot = await getDocs(collection(db, "products")); // Fetching products from Firestore
//         const productsList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProducts(productsList); // Setting products from Firestore
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//         toast.error("Error fetching products");
//       } finally {
//         setIsLoading(false); // End loading
//       }
//     };

//     fetchProducts(); // Call the fetch function
//   }, []);

//   // Add to cart function (as it is)
//   const addToCart = (id, size) => {
//     let cartItemCopy = structuredClone(cartItem);

//     if (!size) {
//       toast.error("Please select a size if size is available");
//       return;
//     }

//     if (cartItemCopy[id]) {
//       if (cartItemCopy[id][size]) {
//         cartItemCopy[id][size] += 1;
//       } else {
//         cartItemCopy[id][size] = 1;
//       }
//     } else {
//       cartItemCopy[id] = { [size]: 1 };
//     }

//     setCartItem(cartItemCopy);
//   };

//   // Value for the context
//   const value = { isLoading, getProduct, setIsLoading, setProducts, cartItem, addToCart };

//   return (
//     <ProductContext.Provider value={value}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;
