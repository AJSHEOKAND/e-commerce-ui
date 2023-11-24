import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
  return (
    <>
      <div className="flex py-0 px-11 flex-col justify-center  xl:flex xl:flex-col xl:py-0 xl:px-40 xl:justify-center xl:items-center">
        <div className="flex py-20 px-0 flex-col items-center gap-12 xl:flex xl:w-full xl:px-12 xl:py-12 xl:flex-col xl:gap-12">
          <div className=" xl:flex xl:items-center xl:justify-center xl:gap-7 xl:flex-wrap">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
