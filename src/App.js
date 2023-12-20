import React from "react";
import AddProducts from "./Pages/AddProducts";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./bottomSection/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
