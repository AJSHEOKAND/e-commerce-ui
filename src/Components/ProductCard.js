import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "./Contexts";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  const [totalProducts, settotalProducts] = useState(1);
  // const [pageNo, setpageNo] = useState(1);
  // const [maxProducts, setMaxProducts] = useState(3);
  const {
    maxProducts,
    setMaxProducts,
    pageNo,
    setpageNo,
  } = useContext(MyContext)

  // const getTotalProducts = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8001/api/products/numproducts");
  //     console.log("total-", res.data);
  //     settotalProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getTotalProducts();

  // }, []);

  const fetchProducts = async () => {
    try {
      // const res1 = await axios.get("http://localhost:8001/api/products/numproducts");
      // console.log("total-", res1.data);
      // settotalProducts(res1.data);
      // let page = res1.data/maxProducts;

      const response = await axios.get("http://localhost:8001/api/products/myproducts", {
        params: {
          maxProducts: maxProducts,
          pageNo: pageNo,
        },
      });

      const data = await response.data;
      console.log("Fetched data:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNo]);

  return (
    <>
    {/* <p>{pageNo}</p> */}
      {products.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center ">
            <div className="flex flex-col xl:items-start">
              <img className="w-60 h-72" src={item.image} alt="Product" />
              <div className="flex pt-6 pr-6 pb-9 pl-6 flex-col items-center gap-2 w-full">
                <div className="text-center text-customColor text-sm font-bold tracking-wide">{item.productTitle}</div>
                <div className="text-center text-customColor2 text-sm font-bold tracking-wide">{item.productCategory}</div>
                <div className="flex gap-1 items-start px-1 py-1">
                  <div className="text-gray-400">{item.productMrp}</div>
                  <div className="text-green-700 font-bold">{item.productPrice}</div>
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
