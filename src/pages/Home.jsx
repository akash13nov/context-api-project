import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col gap-10 h-screen bg-sky-500">
      <h1 className="text-6xl font-bold text-white text-shadow-indigo-200">
        This is Home Page
      </h1>
      <button
        onClick={() => {
          navigate("/Products");
        }}
        className="px-8 py-4 text-xl rounded-lg bg-purple-600 text-white  cursor-pointer
                   transition-transform duration-150
                   hover:scale-105 active:scale-95"
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
