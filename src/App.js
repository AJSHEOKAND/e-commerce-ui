import React from "react";
import AddProducts from "./Pages/AddProducts";
import SingleProduct from "./Components/SingleProduct";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddProducts />} />
        <Route path="/product" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default App;
