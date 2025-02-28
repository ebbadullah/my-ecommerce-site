
import logo from  "./IMG/MYLOGO.png"
import banner1 from  "./IMG/Banner_1.jpeg"
import banner2 from  "./IMG/Banner_2.jpeg"
import cat1 from    "./IMG/cat1.jpeg"
import cat2 from    "./IMG/cat2.jpeg"
import cat3 from    "./IMG/cat3.jpeg"
import cat4 from    "./IMG/cat4.jpeg"
import cat5 from    "./IMG/cat5.jpeg"
// import ban from      "./IMG/Bann.jpeg"



// Mans products

import man1 from "./IMG/Man/man1.jpg"
import man2 from "./IMG/Man/man2.png"
import man3 from "./IMG/Man/man3.png"
import man4 from "./IMG/Man/man4.jpg"
import man5 from "./IMG/Man/man5.jpg"
import man6 from "./IMG/Man/man6.jpg"
import man7 from "./IMG/Man/man7.jpg"
import man8 from "./IMG/Man/man8.jpg"
import man9 from "./IMG/Man/man9.jpg"
import man10 from "./IMG/Man/man10.webp"
import man11 from "./IMG/Man/man11.jpg"
import man12 from "./IMG/Man/man12.jpg"
import man13 from "./IMG/Man/man13.jpg"
import man14 from "./IMG/Man/man14.jpg"
import man15 from "./IMG/Man/man15.jpg"
import man16 from "./IMG/Man/man16.jpg"
import man17 from "./IMG/Man/man17.jpg"
import man18 from "./IMG/Man/man18.jpeg"
import man19 from "./IMG/Man/man19.jpeg"
import man20 from "./IMG/Man/man20.jpeg"



// Woman Products

import women1 from "./IMG/Woman/women1.jpeg"
import women2 from "./IMG/Woman/women2.jpg"
import women3 from "./IMG/Woman/women3.png"
import women4 from "./IMG/Woman/women4.webp"
import women5 from "./IMG/Woman/women5.jpeg"
import women6 from "./IMG/Woman/women6.jpg"
import women7 from "./IMG/Woman/women7.png"
import women8 from "./IMG/Woman/women8.jpg"
import women9 from "./IMG/Woman/women9.png"
import women10 from "./IMG/Woman/women10.jpg"
import women11 from "./IMG/Woman/women11.png"
import women12 from "./IMG/Woman/women12.jpg"
import women13 from "./IMG/Woman/women13.png"
import women14 from "./IMG/Woman/women14.png"
import women15 from "./IMG/Woman/women15.png"
import women16 from "./IMG/Woman/women16.png"
import women17 from "./IMG/Woman/women17.png"
import women18 from "./IMG/Woman/women18.png"
import women19 from "./IMG/Woman/women19.png"
import women20 from "./IMG/Woman/women20.png"

// Kid Products

import kid1 from "./IMG/Kid/kid01.jpg"
import kid2 from "./IMG/Kid/kid02.jpg"
import kid3 from "./IMG/Kid/kid03.jpg"
import kid4 from "./IMG/Kid/kid04.jpg"
import kid5 from "./IMG/Kid/kid05.jpg"
import kid6 from "./IMG/Kid/kid06.jpg"
import kid7 from "./IMG/Kid/kid07.jpg"
import kid8 from "./IMG/Kid/kid08.jpg"
import kid9 from "./IMG/Kid/kid09.jpg"
import kid10 from "./IMG/Kid/kid10.jpg"
import kid11 from "./IMG/Kid/kid11.jpg"
import kid12 from "./IMG/Kid/kid12.jpg"
import kid13 from "./IMG/Kid/kid13.jpg"
import kid14 from "./IMG/Kid/kid14.jpg"
import kid15 from "./IMG/Kid/kid15.jpg"
import kid16 from "./IMG/Kid/kid16.jpg"
import kid17 from "./IMG/Kid/kid17.jpg"
import kid18 from "./IMG/Kid/kid18.jpg"
import kid19 from "./IMG/Kid/kid19.jpg"
import kid20 from "./IMG/Kid/kid20.jpg"




import Saleban1 from    "./IMG/Saleban1.jpg"
import Saleban2 from    "./IMG/Saleban2.jpg"
import Bann    from      "./IMG/Bann.jpeg"
import Bann1   from      "./IMG/Bann1.jpg"

 

import { FaShippingFast, FaHeadset, FaExchangeAlt, FaLock } from "react-icons/fa";
import { BsTwitch } from "react-icons/bs"


 let features = [
  {
    id: 1,
    icon: FaShippingFast, 
    title: "FREE SHIPPING",
    description: "Free shipping on all US orders or orders above $200",
  },
  {
    id: 2,
    icon: FaHeadset,
    title: "SUPPORT 24/7",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
    id: 3,
    icon: FaExchangeAlt,
    title: "30 DAYS RETURN",
    description: "Simply return it within 30 days for an exchange.",
  },
  {
    id: 4,
    icon: FaLock,
    title: "100% PAYMENT SECURE",
    description: "We ensure secure payment with PEV",
  },
];











let Images = {
    logo,banner1,banner2,women2
}


let navbar = [
    {
        lable : "Home",
        path : "/",
    },
    {
        lable : "Shop",
        path : "/shop",
    },
    {
        lable : "Product",
        path : "/product",
    },
    {
        lable : "Pages",
        path : "/pages",
    },
    {
        lable : "Accessories",
        path : "/accessories",
    },
    {
        lable : "Elements",
        path : "/elements",
    },{
        lable : "BuyNow",
        path : "/buynow",
    }

    

]

let  departments = [
    { text: "Value of the Day", badge: "New", badgeColor: "text-green-500" },
    { text: "New Arrivals" },
    { text: "Accessories" },
    { text: "Top 100 Offers" },
    { text: "Lookbook" },
    { text: "Computers" },
    { text: "Watches & Eyewear", badge: "Sale", badgeColor: "text-orange-500" },
    { text: "TV & Audio" },
    { text: "Bags & Luggage" },
    { text: "Jewelry", badge: "Hot", badgeColor: "text-red-500" },
  ];
  

  let footerData = [
    {
      title: "Contact Info",
      content: [
        {
          type: "text",
          value: "Baloch Colony Karachi Pakistan",
        },
        {
          type: "text",
          value: "Email: ebadbaloch@gmail.com",
        },
        {
          type: "text",
          value: "Phone: +92 316 0298672",
        },
        {
          type: "links",
          value: [
            { label: "FB" , href: "#" },
            { label: "TW", href: "#" },
            { label: "IG" , href: "#" },
            { label: "PT", href: "#" },
          ],
        },
      ],
    },
    {
      title: "Categories",
      content: [
        { type: "link", label: "Men", href: "#" },
        { type: "link", label: "Women", href: "#" },
        { type: "link", label: "Accessories", href: "#" },
        { type: "link", label: "Shoes", href: "#" },
        { type: "link", label: "Denim", href: "#" },
        { type: "link", label: "Dress", href: "#" },
      ],
    },
    {
      title: "Information",
      content: [
        { type: "link", label: "About Us", href: "#" },
        { type: "link", label: "Contact Us", href: "#" },
        { type: "link", label: "Terms & Conditions", href: "#" },
        { type: "link", label: "Returns & Exchanges", href: "#" },
        { type: "link", label: "Shipping & Delivery", href: "#" },
        { type: "link", label: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      content: [
        { type: "link", label: "Store Location", href: "#" },
        { type: "link", label: "My Account", href: "#" },
        { type: "link", label: "Accessories", href: "#" },
        { type: "link", label: "Orders Tracking", href: "#" },
        { type: "link", label: "Size Guide", href: "#" },
        { type: "link", label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Newsletter",
      content: [
        {
          type: "text",
          value: "Subscribe to our newsletter and get 10% off your first purchase",
        },
        {
          type: "form",
        },
      ],
    },
  ];
  

  let  categories = [
    {
      imgSrc: cat1, 
      label: 'Women',
    },
    {
      imgSrc: cat2, 
      label: 'Men',
    },
    {
      imgSrc: cat3, 
      label: 'Accessories',
    },
    {
      imgSrc: cat4, 
      label: 'Shoes',
    },
    {
      imgSrc: cat5, 
      label: 'New Arrivals',
    },
  ];




  let  salesData = [
    {
      image: Saleban1,
      title: "LOOKBOOK 2023",
      subtitle: "MAKE LOVE THIS LOOK",
    },
    {
      image: Saleban2,
      title: "SUMMER SALE",
      subtitle: "UP TO 70%",
    },
  ];

  let InfoData = [
    {
      img: Bann ,
      title: "VIEW COLLECTIONS",
      description: "your world of fashion in numbers",
    },
    {
      img: Bann1,
      title: "SUMMER SALE",
      description: "UP TO 70%",
    },
  ];
  
  let Products1 = [
    {
      id: 1,
      img: man1,
      images : [man1, man3, man4,man5],
      name: "Fairy Belted Floral Midi Dress",
      price: 6,
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",
      category: "Men",
      type: "Dresses",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      img: man2,
      images : [man2, man5, man6,man7],
      name: "Floral Short-Sleeve Silk Chiffon Dress",
      price: 120,
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",
      category: "Men",
      type: "Dresses",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      img: man3,
      images : [man3, man5, man6,man9],
      name: "Seattle High-Rise Mini Skirt",
      price: 65,
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",
      category: "Men",
      type: "Skirts",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      img: man4,
      images : [man4, man2, man1,man3],
      name: "Seattle High-Rise Mini Skirt",
      price: 65,
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",
      category: "Men",
      type: "Skirts",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 5,
      img: man5,
      images : [man5, man6,man11,man12],
      name: "Men's Casual Jacket",
      price: 45,
      description:
        "Perfect for a cool and casual vibe. Ideal for outings or just lounging around. Bright and cheerful graphic t-shirt for kids. Comfortable and lightweight ",
      category: "Men",
      type: "Jackets",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      img: man6,
      images : [man6, man2,man1,man4],
      name: "Kids Graphic T-Shirt",
      price: 20,
      description:
        "Bright and cheerful graphic t-shirt for kids. Comfortable and lightweight.Bright and cheerful graphic t-shirt for kids. Comfortable and lightweight",
      category: "Men",
      type: "T-shirts",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 7,
      img: man7,
      images : [man7, man2,man5,man8],

      name: "Fairy Belted Floral Midi Dress",
      price: 6.,
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",
      category: "Men",
      type: "Dresses",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      img: man8,
      images : [man8,  man5,man16,man19],
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",

      name: "Floral Short-Sleeve Silk Chiffon Dress",
      price: 120,
      category: "Men",
      type: "Dresses",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 9,
      img: man9,
      images : [man9,man4 ,man1,man5],

      name: "Seattle High-Rise Mini Skirt",
      price:65,
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",
      category: "Men",
      type: "Skirts",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 10,
      img: man10,
      images : [man10, man4 ,man20,man15],

      name: "Seattle High-Rise Mini Skirt",
      price: 65,
      description:
        "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe",
      category: "Men",
      type: "Skirts",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 11,
      img: man11,
      images : [man11,  man4,man14,man12],

      name: "Men's Winter Jacket",
      price: 80,
      description:
        "Stay warm and stylish with this high-quality winter jacket for men.",
      category: "Men",
      type: "Jackets",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 12,
      img: man12,
      images : [man12, man14 ,man11,man5],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
    },
    {
      id: 13,
      img: man13,
      images : [man13,  man5,man6,man9],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 14,
      img: man14,
      images : [man14,  man4,man1,man2],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 15,
      img: man15,
      images : [man15, man5, man19,man4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 16,
      img: man16,
      images : [man16, man4 ,man15,man13],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 17,
      img: man17,
      images : [man17, man7 ,man14,man13],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 18,
      img: man18,
      images : [man18, man4 ,man15,man13],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 19,
      img: man19,
      images : [man16, man4 ,man15,man13],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 20,
      img: man20,
      images : [man16, man4 ,man15,man13],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Men",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    // Women Turns
    {
      id: 21,
      img: women1,
      images : [women1, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 22,
      img: women2,
      images : [women2, women6 ,women8,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 23,
      img: women3,
      images : [women3, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 24,
      img: women4,
      images : [women4, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 25,
      img: women5,
      images : [women5, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 26,
      img: women6,
      images : [women6, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 27,
      img: women7,
      images : [women7, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 28,
      img: women8,
      images : [women8, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 29,
      img: women9,
      images : [women9, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 30,
      img: women10,
      images : [women10, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 31,
      img: women11,
      images : [women11, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 32,
      img: women12,
      images : [women12, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 33,
      img: women13,
      images : [women13, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 34,
      img: women14,
      images : [women14, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 35,
      img: women15,
      images : [women15, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 36,
      img: women16,
      images : [women16, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 37,
      img: women17,
      images : [women17, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 38,
      img: women18,
      images : [women18, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 39,
      img: women19,
      images : [women19, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
    {
      id: 40,
      img: women20,
      images : [women20, women4 ,women5,women4],

      name: "Baby's Soft Onesie",
      price: 15,
      description:
        "Soft and cozy onesie for babies. Made with 100% organic cotton.",
      category: "Women",
      type: "Accessories",
       size: ["S", "M", "L", "XL"],
    },
// kid products
{
  id: 41,
  img: kid1,
  images : [kid1, kid4, kid5, kid4],

  name: "Cozy Baby Bodysuit",
  price: 15,
  description: "Soft and cozy bodysuit for babies. Made with 100% organic cotton.",
  category: "Baby",
  type: "Accessories",
  size: ["S", "M", "L", "XL"],
},
{
  id: 42,
  img: kid2,
  images : [kid2, kid6, kid8, kid4],

  name: "Organic Cotton Romper",
  price: 16,
  description: "Romper made with high-quality organic cotton, perfect for babies.",
  category: "Baby",
  type: "Accessories",
  size: ["S", "M", "L", "XL"],
},
{
  id: 43,
  img: kid3,
  images : [kid3, kid5, kid6, kid4],

  name: "Cute Women Jumpsuit",
  price: 17,
  description: "Comfortable and stylish jumpsuit, ideal for playtime.",
  category: "Baby",
  type: "Accessories",
  size: ["S", "M", "L", "XL"],
},
{
  id: 44,
  img: kid4,
  images : [kid4, kid6, kid7, kid5],

  name: "Soft Baby Footie",
  price: 18,
  description: "Footie designed with extra softness for delicate baby skin.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 45,
  img: kid5,
  images : [kid5, kid8, kid9, kid4],

  name: "Warm Baby Sleepsuit",
  price: 19,
  description: "Keep your baby warm and cozy with this comfortable sleepsuit.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 46,
  img: kid6,
  images : [kid6, kid4, kid5, kid8],

  name: "Breathable Baby Onesie",
  price: 14,
  description: "Breathable and lightweight onesie for daily wear.",
  category: "Baby",
  type: "Accessories",
  size: ["S", "M", "L", "XL"],
},
{
  id: 47,
  img: kid7,
  images : [kid7, kid5, kid4, kid6],

  name: "Soft Fleece Baby Hoodie",
  price: 20,
  description: "Fleece hoodie to keep your baby warm during cold weather.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 48,
  img: kid8,
  images : [kid8, kid4, kid5, kid9],

  name: "Comfy Baby Leggings",
  price: 13,
  description: "Stretchy and comfortable leggings for babies on the move.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 49,
  img: kid9,
  images : [kid9, kid5, kid4, kid7],

  name: "Playtime Baby Overalls",
  price: 18,
  description: "Durable and comfortable overalls, perfect for playtime adventures.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 50,
  img: kid10,
  images : [kid10, kid6, kid5, kid8],

  name: "Snuggly Baby Pajamas",
  price: 20,
  description: "Cozy pajamas made from soft fabric for a perfect night's sleep.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 51,
  img: kid11,
  images : [kid11, kid9, kid7, kid6],

  name: "Fun Baby Graphic Tee",
  price: 12,
  description: "A fun graphic tee for babies, designed with comfort in mind.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 52,
  img: kid12,
  images : [kid12, kid10, kid8, kid6],

  name: "Baby Winter Coat",
  price: 25,
  description: "Warm and stylish winter coat to protect your baby from the cold.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 53,
  img: kid13,
  images : [kid13, kid11, kid9, kid7],

  name: "Lightweight Baby Jacket",
  price: 22,
  description: "A lightweight jacket that’s perfect for cool weather outings.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 54,
  img: kid14,
  images : [kid14, kid12, kid10, kid8],

  name: "Baby Floral Dress",
  price: 24,
  description: "A cute floral dress, perfect for special occasions.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 55,
  img: kid15,
  images : [kid15, kid11, kid9, kid7],

  name: "Striped Baby Trousers",
  price: 15,
  description: "Comfortable striped trousers for daily wear.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 56,
  img: kid16,
  images : [kid16, kid12, kid10, kid8],

  name: "Baby Denim Shorts",
  price: 16,
  description: "Stylish denim shorts for your little one's casual outings.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 57,
  img: kid17,
  images : [kid17, kid13, kid11, kid9],

  name: "Baby Printed Bodysuit",
  price: 17,
  description: "Printed bodysuit with fun designs, ideal for everyday wear.",
  category: "Baby",
  type: "Clothing",
  size: ["S", "M", "L", "XL"],
},
{
  id: 58,
  img: kid18,
  images : [kid18, kid14, kid12, kid10],

  name: "Baby Hooded Blanket",
  price: 23,
  description: "Soft hooded blanket to keep your baby warm and snug.",
  category: "Baby",
  type: "Accessories",
  size: ["One Size"],
},
{
  id: 59,
  img: kid19,
  images : [kid19, kid15, kid13, kid11],

  name: "Baby Sleep Sack",
  price: 21,
  description: "A cozy sleep sack for a restful night's sleep for your baby.",
  category: "Baby",
  type: "Accessories",
  size: ["One Size"],
},
{
  id: 60,
  img: kid20,
  images : [kid20, kid16, kid14, kid12],

  name: "Baby Mittens Set",
  price: 10,
  description: "A set of soft mittens to keep your baby’s hands warm.",
  category: "Baby",
  type: "Accessories",
  size: ["One Size"],
}



  ];
  
  let productTabs = [
    { 
      id: "details", 
      name: "Details", 
      content: "Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Abercrombie & Fitch.Go sporty this summer with this vintage navy and white striped v-neck t-shirt from Abercrombie & Fitch ypography is the work of typesetters, compositors, typographers, and graphic designers." 
    },
    { 
      id: "moreInfo", 
      name: "More Information", 
      content: "Typography is the work of typesetters, compositors, typographers, and graphic designers." 
    },
    { 
      id: "custom", 
      name: "Custom Tab", 
      content: "This is a custom tab. You can add your own content here!" 
    },
    { 
      id: "reviews", 
      name: "Reviews", 
      content: [
        {
          user: "Ali Raza",
          rating: 5,
          comment: "Amazing quality! Worth every penny.",
        },
        {
          user: "Fatima Khan",
          rating: 4,
          comment: "Good product, but the delivery was slow.",
        },
        {
          user: "Ahmed Sheikh",
          rating: 4.5,
          comment: "Nice  design and comfortable to wear!",
        },
      ],
    },
  ];
  



   
  



  
   
  


export  {salesData,navbar,Images,departments,footerData,categories,features,Products1,InfoData,productTabs};

