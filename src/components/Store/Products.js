import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';
import '../../Styles/Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from products data
    const uniqueCategories = Array.from(new Set(products.map(product => product.categories).flat()));
    setCategories(['All', ...uniqueCategories]);
  }, [products]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.categories.includes(selectedCategory)));
    }
  }, [selectedCategory, products]);

  return (
    <div className="product-page-container">
      <div className="cart-icon">
        <Link to="/cart">
          <img src="/cart.png" alt="Cart" style={{ width: '50px' }} />
        </Link>
      </div>
      <div className="product-content">
        <h2>Our Products</h2>
        <div className="filter-container">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
