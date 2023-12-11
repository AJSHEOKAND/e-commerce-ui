import React from "react";
import AddProducts from "./Pages/AddProducts";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import { StateProvider } from "./Components/Contexts";

const App = () => {
  return (
    <>
      <StateProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addProduct" element={<AddProducts />} />
        </Routes>
      </StateProvider>
    </>
  );
};

export default App;
