// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItems from './CartItem';
import '../../Styles/Cart.css'

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0; // Convert to number
    const itemQuantity = parseInt(item.quantity, 10) || 0; // Convert to number
    return acc + (itemPrice * itemQuantity);
  }, 0).toFixed(2);

  const totalQuantity = cart.reduce((acc, item) => {
    const itemQuantity = parseInt(item.quantity, 10) || 0; // Convert to number
    return acc + itemQuantity;
  }, 0);

  const handleCheckout = () => {
   
    console.log('Proceed to checkout');
  };

  return (
    <div className="cart-page">
      <div className="cart-content">
        <div className="cart-items">
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => <CartItems key={item.id} item={item} />)
          )}
        </div>
        <div className="cart-summary">
          <div className="summary-item">
            <p>Subtotal:</p>
            <p>{totalAmount}</p>
          </div>
          <div className="summary-item">
            <p>Estimated Tax:</p>
            <p>$0.00</p>
          </div>
          <div className="summary-item">
            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;