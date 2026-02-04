import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  return (
    <div>
      <div class="cart">
        <Link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="cart-count">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
