import { useState, useEffect } from "react";
import { useTheme } from "../ProductContext/ThemeContext";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    setProducts([
      { name: "Patimax Fragrance Long...", country: "🇩🇪", code: "Sflat" },
      { name: "Nulo MedalSeries Adult Cat...", country: "🇮🇳", code: "Sflat" },
      { name: "Pedigree Puppy Dry Dog...", country: "🇬🇧", code: "Sflat" },
      { name: "Biscoito Premier Cookie...", country: "🇧🇷", code: "Sflat" },
      { name: "Pedigree Adult Dry Dog...", country: "🇫🇷", code: "Sflat" },
    ]);

    setSales([
      { country: "🇹🇷 Turkish", value: 6972, trend: "up" },
      { country: "🇧🇪 Belgium", value: 6972, trend: "up" },
      { country: "🇸🇪 Sweden", value: 6972, trend: "down" },
      { country: "🇻🇳 Vietnamese", value: 6972, trend: "up" },
      { country: "🇦🇺 Australia", value: 6972, trend: "down" },
      { country: "🇸🇦 Saudi Arabia", value: 6972, trend: "down" },
    ]);
  }, []);

  return (
    <div className="p-4  mr-12  text-black relative  ">
      <div className="flex justify-center gap-8 w-full max-w-6xl items-start">
        {/* Top Products */}
        <div className=" text-black p-4   w-[60%] ">
          <h2 className="text-2xl font-bold mb-4">Top Products</h2>
          {products.map((product, index) => (
            <div key={index} className="flex justify-between py-4 border-b border-gray-300 text-xl">
              <span>{product.name}</span>
              <span>{product.country}</span>
              <span className="text-green-500">{product.code}</span>
            </div>
          ))}
        </div>

        {/* Top Countries By Sales */}
        <div className=" text-black p-4 ml-16  w-[60%]">
          <h2 className="text-2xl font-bold mb-4">Top Countries By Sales</h2>
          <h3 className="text-4xl font-bold mb-6">$37,802 <span className="text-green-500">▲ 1.56%</span></h3>
          {sales.map((sale, index) => (
            <div key={index} className="flex justify-between py-4 border-b border-gray-300 text-xl">
              <span>{sale.country}</span>
              <span>{sale.value}</span>
              <span className={sale.trend === "up" ? "text-green-500" : "text-red-500"}>
                {sale.trend === "up" ? "▲" : "▼"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;