import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./context/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/context-api-project">
    <ProductsContext>
      <App />
    </ProductsContext>
  </BrowserRouter>
);
