import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./components/Category";
import ProductOverview from "./components/ProductOverview";
import ProtectedLayout from "./pages/admin/ProtectedLayout";
import LoginPage from "./pages/admin/Login";
import Responses from "./pages/admin/Responses";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ImageSlider from "./components/ImageSlider";
import UpdateProduct from "./pages/admin/UpdateProduct";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />} />
        <Route path="/demo" element={<ImageSlider />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route
          path="/category/:categoryName/:productId"
          element={<ProductOverview />}
        />
        <Route path="/admin" element={<ProtectedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="responses" element={<Responses />} />
          <Route path="updateProduct/:productId" element={<UpdateProduct />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
