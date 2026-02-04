import React from "react";
import AddToCart from "../AddToCart/AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header class="header">
        <div class="logo">MyShop</div>

        <nav class="nav">
          <a>
            <Link to="/">Home</Link>
          </a>
        </nav>
        <AddToCart />
      </header>
    </div>
  );
};

export default Header;
