import React from "react";
import AddProducts from "./Pages/AddProducts";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddProducts />} />
      </Routes>
    </>
  );
};

export default App;
