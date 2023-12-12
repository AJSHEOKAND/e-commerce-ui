import React from "react";
import arrow from "../Media/icon arrow-right.png";
import ImagesCategory from "../Data/ProductsCategoryData";

const ProductCategory = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="font-bold mt-11 md:mt-0 ml-44 flex-shrink-0">Shop</div>
        <div className="flex gap-2 ml-auto mt-4 md:mt-0">
          <div className="flex font-bold text-sm ">Home</div>
          <img src={arrow} className="w-3 h-4 mt-1 md:mt-0" alt="Arrow" />
          <div className="flex text-gray-300 text-sm font-semibold md: mr-36">
            Shop
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center">
        {ImagesCategory.map((item, index) => (
          <div key={index} className="p-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={`Product ${index + 1}`}
                className="w-64 h-72 sm:w-1/2 md:w-64 lg:w-56"
              />
              <div className=" mb-20 font-bold justify-center flex -mt-48 text-white">
                {item.wear}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
