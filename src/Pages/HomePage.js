import React from "react";
import Navbar from "../Components/Navbar";
import ProductsFilter from "../Components/ProductsFilter";
import ProductsContainer from "../Components/ProductsContainer";
import ProductsCategory from "../Components/ProductCategorys";
import Pagination from "../Components/Pagination";
import DesktopClients from "../Components/DesktopClients";
import Footer from "../bottomSection/Footer";
import Login from "../Components/Login"
import Register from "../Components/Register"
import { Route, Routes } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductsCategory />
              <ProductsFilter />
              <ProductsContainer />
              <Pagination />
              <DesktopClients />
            </>
          }
        />
        <Route path="/login" element={<Login/> }/>
        <Route path="/register" element={<Register/> }/>
      </Routes>
      <Footer />
    </>
  );
};

export default HomePage;
