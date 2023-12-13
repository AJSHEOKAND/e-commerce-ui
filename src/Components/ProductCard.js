// ProductCard.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProductCard = () => {
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
            <img
              className="w-72 h-72"
              src={`https://res.cloudinary.com/dtqc673xu/image/upload/${item.image}`}
              alt="Product"
            />

            <div className="flex pt-6 pr-6 pb-9 pl-6 flex-col items-center gap-2 w-72">
              <Link to="/product" className=" text-customColor text-center text-sm font-bold tracking-wide truncate w-full">
                {item.pname}
              </Link>
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
