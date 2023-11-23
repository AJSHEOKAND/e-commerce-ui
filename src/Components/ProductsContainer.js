import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
  return (
    <>
      <div className="flex flex-col py-0 px-40 justify-center items-center">
        <div className="flex w-full px-12 py-0 flex-col items-start gap-12">
          <div className="flex items-start gap-7 flex-wrap">
            <ProductCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
