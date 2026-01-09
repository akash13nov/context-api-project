import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

const Products = () => {
  const product = useContext(ProductDataContext);
  let renderData = "";

  if (product.length > 0) {
    renderData = product.map((elem, idx) => {
      return (
        <Link
          key={idx}
          href=""
          className="w-[350px] bg-white rounded-2xl overflow-hidden cursor-pointer
                shadow-lg hover:shadow-2xl transition-shadow duration-300"
          to={`/products/${elem.id}`}
        >
          <div className="h-[220px] flex items-center justify-center bg-gray-100 p-4">
            <img
              src={elem.image}
              alt={elem.title}
              className="h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5">
            <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
              {elem.category}
            </span>
            <h2 className="mt-2 text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
              {elem.title}
            </h2>
            <p className="text-sm text-gray-600 mt-3 line-clamp-3">
              {elem.description}
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-xl font-bold text-gray-900">
                ${elem.price}
              </span>

              <button
                className="px-4 py-2 text-sm rounded-lg bg-black text-white
                   transition-transform duration-150 
                   hover:scale-105 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="w-screen h-full bg-sky-500 flex flex-wrap gap-5 p-5">
      {renderData}
    </div>
  );
};

export default Products;
