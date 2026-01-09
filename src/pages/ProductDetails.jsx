import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductsContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  const { productId } = useParams();
  let selectedProduct = "";
  if (productData.length > 0) {
    selectedProduct = productData.find((elem) => elem.id == productId);
  }
  return (
    <div className="flex gap-15 p-5 bg-sky-300">
      <div className="flex items-center justify-center p-4 h-[350px]">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col justify-center">
        <span className="text-md uppercase tracking-wide text-white font-semibold">
          {selectedProduct.category}
        </span>
        <h2 className="mt-2 text-lg font-semibold text-gray-800">
          {selectedProduct.title}
        </h2>
        <p className="text-sm text-gray-600 mt-3">
          {selectedProduct.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-xl font-bold text-gray-900">
            ${selectedProduct.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
