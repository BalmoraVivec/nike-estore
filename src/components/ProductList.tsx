import React, { useEffect, useState } from 'react';
import { Product as ProductInterface } from '../interfaces/Product';
import Product from './Product';
import Sorter from './Sorter';
import '../styles/ProductList.css';
import { fetchProducts } from '../utils/api';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortMethod, setSortMethod] = useState<'price' | 'id' | 'title'>('id');
  const [imageSize, setImageSize] = useState<number>(250); // default image size

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortMethod === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortMethod === 'title') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else {
      return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
    }
  });

  return (
    <div className="product-list">
      <Sorter
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        imageSize={imageSize}
        setImageSize={setImageSize}
      />
      <div
        className="product-list__grid"
        style={{ '--image-size': `${imageSize}px` } as React.CSSProperties}
      >
        {sortedProducts.map((product) => (
          <Product key={product.id} product={product} imageSize={imageSize} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
