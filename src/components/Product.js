import React from 'react';
import { useStore } from '../context/StoreContext';
import './Product.css';

const Product = ({ product }) => {
  const { dispatch } = useStore();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const addToLikes = () => {
    dispatch({ type: 'ADD_TO_LIKES', product });
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={addToLikes}>Like</button>
    </div>
  );
};

export default Product;