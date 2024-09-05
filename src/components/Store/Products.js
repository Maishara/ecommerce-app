import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import '../../App.css';
const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product Listing</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
