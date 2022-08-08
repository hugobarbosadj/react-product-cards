import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./Basic/Basic";
import ProductComparison from "./ProductComparison/ProductComparison";
import EcommerceCategoryProduct from "./EcommerceCategoryProduct/EcommerceCategoryProduct";
import EcommerceProductListing from "./EcommerceProductListing/EcommerceProductListing";
import QuickBuy from "./QuickBuy/QuickBuy";
import BestsellersListing from "./BestsellersListing/BestsellersListing";
import ProductCards from "./ProductCards/ProductCards";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/ProductComparison" element={<ProductComparison />} />
        <Route
          path="/EcommerceCategoryProduct"
          element={<EcommerceCategoryProduct />}
        />
        <Route
          path="/EcommerceProductListing"
          element={<EcommerceProductListing />}
        />
        <Route path="/QuickBuy" element={<QuickBuy />} />
        <Route path="/BestsellersListing" element={<BestsellersListing />} />
        <Route path="/ProductCards" element={<ProductCards />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
