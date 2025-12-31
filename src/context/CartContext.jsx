import React, { createContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext();

const initialItems = [];

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialItems);

  const addItem = useCallback((item) => {
    setItems(prevItems => [...prevItems, item]);
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo(() => ({
    items,
    addItem,
    removeItem,
    clearCart,
  }), [items, addItem, removeItem, clearCart]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export default CartContext;

