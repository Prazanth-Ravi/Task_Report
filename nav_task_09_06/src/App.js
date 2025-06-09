import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Add_Product from "./components/Add_Product";
import Box from "./components/Box";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Box />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add_product" element={<Add_Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
