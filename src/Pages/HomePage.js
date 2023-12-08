import React from "react";
import Navbar from "../Components/Navbar";
import ProductsFilter from "../Components/ProductsFilter";
import ProductsContainer from "../Components/ProductsContainer";
import Pagination from "../Components/Pagination";
import DesktopClients from "../Components/DesktopClients";
import Footer from "../bottomSection/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <ProductsFilter />
      <ProductsContainer />
      <Pagination />
      <DesktopClients />
      <Footer />
    </>
  );
};

export default HomePage;
