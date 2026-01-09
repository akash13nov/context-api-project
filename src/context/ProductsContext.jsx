import React, { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/ProductApi";

export const ProductDataContext = createContext();
const ProductsContext = (props) => {
  const [product, setProduct] = useState([]);

  const setData = async () => {
    setProduct(await getAllProductData());
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <ProductDataContext.Provider value={product}>
      {props.children}
    </ProductDataContext.Provider>
  );
};

export default ProductsContext;
