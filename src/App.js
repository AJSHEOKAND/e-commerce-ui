import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./bottomSection/Footer";
import Header from "./Header/Header";
import ProductsContainer from "./Components/ProductsContainer";
import ProductsFilter from "./Components/ProductsFilter";
import Pagination from "./Components/Pagination";
import DesktopClients from "./Components/DesktopClients";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Header/> */}
     
      <ProductsFilter />
      <ProductsContainer />
      <Pagination />
      <DesktopClients />
      <Footer/>

    </>
  );
};

export default App;
