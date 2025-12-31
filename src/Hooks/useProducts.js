import { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function useProducts() {
  const { products, loading } = useContext(ProductsContext);
  return { products, loading };
}
