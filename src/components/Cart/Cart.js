// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItems from './CartItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => <CartItems key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Cart;
