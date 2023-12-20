// ProductCard.js
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaTag } from "react-icons/fa";
const ProductCard = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8001/api/products/allproducts"
        );
        const data = await response.json();
        console.log("Fetched data:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div
              className="relative"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                className="w-72 h-72"
                src={`https://res.cloudinary.com/dtqc673xu/image/upload/${item.image}`}
                alt="Product"
              />
              <div
                className={`bg-black bg-opacity-50 w-full h-full absolute top-0 flex-col gap-3 items-center justify-center ${
                  hoveredProduct === index ? "flex" : "hidden"
                } `}
              >
                <button className="text-white flex items-center border rounded-xl p-2 gap-1"> <FaShoppingCart/>Add To Cart </button>
                <button className="text-white flex items-center border rounded-xl p-2 gap-1"> <FaTag />View Product </button>
              </div>
            </div>
            <div className="flex pt-6 pr-6 pb-9 pl-6 flex-col items-center gap-2 w-72">
              <div className=" text-customColor text-center text-sm font-bold tracking-wide truncate w-full">
                {item.pname}
              </div>
              {/* <div className="truncate w-full text-center text-customColor2 text-sm font-bold tracking-wide">
                {item.desc}
              </div> */}
              <div className="flex gap-1 items-start px-1 py-1">
                <div className="text-gray-400">Rs. {item.price}/-</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
