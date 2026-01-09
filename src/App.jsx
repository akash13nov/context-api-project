import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/products/:productId"} element={<ProductDetails />} />
    </Routes>
  );
};

export default App;
