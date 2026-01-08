import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductDataContext = createContext();
const ProductsContext = (props) => {
  const [product, setProduct] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductDataContext.Provider value={product}>
      {props.children}
    </ProductDataContext.Provider>
  );
};

export default ProductsContext;
