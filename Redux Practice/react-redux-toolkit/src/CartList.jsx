import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";
export default function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(cartSelector);
  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCartItems(cartTempItems);
  };

  const handlePlaceOrder = () => {
    localStorage.removeItem("cart");
    dispatch(clearAllItems);
    navigate("/");
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your cart items</h2>
          <span>{cartSelector.length} items</span>
        </div>
        {cartSelector.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} alt="" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                  <div className="item-actions">
                    <div style={{ display: "flex" }}>
                      <input
                        onChange={(e) =>
                          manageQuantity(item.id, e.target.value)
                        }
                        style={{ margin: "15px" }}
                        type="number"
                        placeholder="Enter quantity"
                      />
                      <div>
                        <span className="price">
                          {(item.quantity
                            ? item.price * item.quantity
                            : item.price
                          ).toFixed(2)}
                        </span>
                        <button
                          onClick={() => dispatch(removeItem(item))}
                          className="btn"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
        <div className="cart-footer">
          Total :{" "}
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.price * item.quantity
                  : sum + item.price,
              0,
            )
            .toFixed(2)}
        </div>
        <button onClick={handlePlaceOrder} className="btn">
          Place order
        </button>
      </div>
    </>
  );
}
