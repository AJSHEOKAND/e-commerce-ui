import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [totalProducts, settotalProducts] = useState(1);

  const getTotalProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/products/numproducts");
      console.log("total-", res.data);
      settotalProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTotalProducts();
  }, []);

  // Generate an array of buttons based on totalProducts count
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalProducts / 2; i++) {
      buttons.push(
        <button key={i} className="px-5 py-6 border text-blue-500 font-bold">
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex pb-12">
          <button className="p-6 border rounded-tl-lg rounded-bl-lg font-bold text-customColor2 bg-zinc-100">First</button>

          {renderButtons()}
          <button className="p-6 border text-blue-500 font-bold rounded-tr-lg rounded-br-lg ">Next</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
