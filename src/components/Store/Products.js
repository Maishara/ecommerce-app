// src/components/ProductsPage.js
import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';
import '../../Styles/Products.css';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-page-container">
      <div className="cart-icon">
        <Link to="/cart">
          <img src="/cart.png" alt="Cart" style={{ width: '50px' }} />
        </Link>
      </div>
      <div className="product-content">
        <h2>Our Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
