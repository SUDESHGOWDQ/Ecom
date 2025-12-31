import { useContext, useMemo } from 'react';
import CartContext from '../context/CartContext';

export default function useCart() {
  const { items, addItem, removeItem, clearCart } = useContext(CartContext);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  return { items, addItem, removeItem, clearCart, total };
}
