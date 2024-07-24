import React from 'react';
import { Product as ProductInterface } from '../interfaces/Product';
import '../styles/Product.css';

interface ProductProps {
  product: ProductInterface;
  imageSize: number;
}

const Product: React.FC<ProductProps> = ({ product, imageSize }) => {
  return (
    <div className="product" style={{ width: imageSize }}>
      <div className="product__image-wrapper" style={{ height: imageSize }}>
        <img src={product.image} alt={product.title} className="product__image" />
      </div>
      <div className="product__details">
        <p className="product__title">{product.title}</p>
        <p className="product__price">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
