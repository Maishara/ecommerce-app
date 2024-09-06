
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartItems = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateQuantity(item.id, quantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItems;
