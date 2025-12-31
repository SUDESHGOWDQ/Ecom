import { createContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => Array.isArray(res.data) ? setProducts(res.data) : setProducts([]))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => ({ products, loading }), [products, loading]);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export default ProductsContext;
