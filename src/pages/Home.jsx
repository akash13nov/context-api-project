import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl">This is Home Page</h1>
      <button
        onClick={() => {
          navigate("/Products");
        }}
        className="px-4 py-2 text-sm rounded-lg bg-purple-600 text-white cursor-pointer
                   transition-transform duration-150
                   hover:scale-105 active:scale-95"
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
