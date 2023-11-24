import React from "react";
import Navbar from "./Components/Navbar";
import ProductsContainer from "./Components/ProductsContainer";
import ProductsFilter from "./Components/ProductsFilter";
import Pagination from "./Components/Pagination";
import DesktopClients from "./Components/DesktopClients";

const App = () => {
  return (
    <>
      <Navbar />
      <ProductsFilter />
      <ProductsContainer />
      <Pagination />
      <DesktopClients />
    </>
  );
};

export default App;
