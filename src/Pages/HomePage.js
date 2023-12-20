import React from "react";
import ProductsFilter from "../Components/ProductsFilter";
import ProductsContainer from "../Components/ProductsContainer";
import ProductsCategory from "../Components/ProductCategorys";
import Pagination from "../Components/Pagination";
import DesktopClients from "../Components/DesktopClients";

const HomePage = () => {
  return (
    <>
      <ProductsCategory />
      <ProductsFilter />
      <ProductsContainer />
      <Pagination />
      <DesktopClients />
    </>
  );
};

export default HomePage;
