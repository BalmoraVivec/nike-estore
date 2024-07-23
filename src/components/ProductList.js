import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/fakestoreapi';
import Product from './Product';
import SortOptions from './SortOptions';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'price-low-high') {
      return a.price - b.price;
    } else if (sort === 'price-high-low') {
      return b.price - a.price;
    } else {
      return a.id - b.id; // default sorting by ID
    }
  });

  return (
    <div className="product-list-container">
      <SortOptions sort={sort} onSortChange={handleSortChange} />
      <div className="product-list">
        {sortedProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;