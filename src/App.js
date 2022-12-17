import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout";
import Home from "./shared/pages/Home";
import Products from './shared/pages/Products';
import Product from './shared/pages/Product';
import 'App.css';
import EditProduct from "Products/pages/EditProduct";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/add" element={<Product/>} />
        <Route path="/products/edit/:productId" element={<EditProduct />} />
      </Routes>
    </Layout>
  );
}

export default App;
