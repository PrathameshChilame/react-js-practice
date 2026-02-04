import React from "react";
import Header from "./Header/Header";
import AddToCart from "./AddToCart/AddToCart";
import Product from "./Product/Product";
import { clearAllItems } from "./redux/slice";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./CartList";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
