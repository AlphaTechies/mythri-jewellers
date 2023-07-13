import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./components/Category";
import ProductOverview from "./components/ProductOverview";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:productname" element={<ProductOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
