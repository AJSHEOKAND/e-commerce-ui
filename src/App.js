import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./bottomSection/Footer";
// import Header from "./Header/Header";
import ProductsContainer from "./Components/ProductsContainer";
import ProductsFilter from "./Components/ProductsFilter";
import Pagination from "./Components/Pagination";
import DesktopClients from "./Components/DesktopClients";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>


        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<>
          <ProductsFilter />
          <ProductsContainer />
          <Pagination />
          <DesktopClients />
          <Footer/>
        </>} />



      </Routes>


      {/* <Header/> */}

      {/* <ProductsFilter />
      <ProductsContainer />
      <Pagination />
      <DesktopClients />
      <Footer/> */}

    </>
  );
};

export default App;
