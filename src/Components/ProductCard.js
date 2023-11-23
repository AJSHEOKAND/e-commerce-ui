import React from "react";
import { product } from "../Data/ProductsData";

const ProductCard = () => {
  return (
    <>
      {product.map((item, index) => {
        return (
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-start">
              <img src={item.image} alt="Product" />
              <div className="flex pt-6 pr-6 pb-9 pl-6 flex-col items-center gap-2 w-full">
                <div className="text-center text-customColor text-sm font-bold tracking-wide">
                  {item.productTitle}
                </div>
                <div className="text-center text-customColor2 text-sm font-bold tracking-wide">
                  {item.productCategory}
                </div>
                <div className="flex gap-1 items-start px-1 py-1">
                  <div className="text-gray-400">{item.productMrp}</div>
                  <div className="text-green-700 font-bold">
                    {item.productPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;