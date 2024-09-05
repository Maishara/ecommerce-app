import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import ProductCard from './ProductCard';

const Store = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Store</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
