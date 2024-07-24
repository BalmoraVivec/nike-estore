import { Product } from '../interfaces/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
};
