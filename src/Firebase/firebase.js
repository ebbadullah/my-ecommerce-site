// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApT-_Ux-Z9jpRLUfMBhxysLvR8HX1COyg",
  authDomain: "ecomerce-45b0c.firebaseapp.com",
  projectId: "ecomerce-45b0c",
  storageBucket: "ecomerce-45b0c.firebasestorage.app",
  messagingSenderId: "315619885693",
  appId: "1:315619885693:web:676847fe079d5f8208e714",
  measurementId: "G-EENS9VSW4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}


