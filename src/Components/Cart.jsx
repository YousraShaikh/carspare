import React, { useState } from "react";
import "./Cart.css"; // Add a CSS file for styling

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty! Add some items.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price}</span>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="total-price">
            <strong>Total Price:</strong> ${calculateTotalPrice()}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
