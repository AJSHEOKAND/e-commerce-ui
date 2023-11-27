import React from "react";

import Footer from "./bottomSection/Footer";

import ProductsContainer from "./Components/ProductsContainer";
import ProductsFilter from "./Components/ProductsFilter";
import Pagination from "./Components/Pagination";
import DesktopClients from "./Components/DesktopClients";
import ProductCategory from "./Components/ProductCategorys";

const App = () => {
  return (
    <>
    
      
      <ProductCategory/>
      <ProductsFilter />
      <ProductsContainer />
      <Pagination />
      <DesktopClients />
      <Footer/>

    </>
  );
};

export default App;
