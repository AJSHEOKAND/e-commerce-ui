import React from "react";

import Footer from "./Components/Footer";

import ProductsContainer from "./Components/ProductsContainer";
import ProductsFilter from "./Components/ProductsFilter";
import Pagination from "./Components/Pagination";
import DesktopClients from "./Components/DesktopClients";
import ProductCategory from "./Components/ProductCategorys";
import SingleProduct from "./Components/SingleProduct";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ProductCategory />
      <ProductsFilter />
      <ProductsContainer />
      <Pagination />
      <DesktopClients />
      <Footer />
      <SingleProduct/>

     
    </>
  );
};

export default Home;

