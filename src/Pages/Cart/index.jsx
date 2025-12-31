import React, { useState, useEffect, useMemo } from 'react';
import { FaTrash } from 'react-icons/fa';
import './index.css';
import useCart from '../../Hooks/useCart';

const Cart = () => {
	const { items, removeItem } = useCart();
	const [quantities, setQuantities] = useState(() => items.map(item => item.quantity || 1));

	useEffect(() => {
		setQuantities(items.map(item => item.quantity || 1));
	}, [items]);

	const handleQuantityChange = (idx, delta) => {
		setQuantities(prev => {
			const updated = [...prev];
			updated[idx] = Math.max(1, updated[idx] + delta);
			return updated;
		});
	};

	const totalAmount = useMemo(() => {
		return items.reduce((total, item, idx) => total + item.price * (quantities[idx] || 1), 0);
	}, [items, quantities]);

	return (
		<div className="cart-container">
			<h1 className="cart-header">Your Shopping Cart</h1>
			{items.length > 0 ? (
				<div className="cart-list">
					{items.map((item, idx) => (
						<div key={idx} className="cart-item">
							<img className="cart-item-image" src={item.image} alt={item.title} />
							<div className="cart-item-details">
								<div className="cart-title">{item.title}</div>
								<div className="cart-price">${item.price.toFixed(2)}</div>
							</div>
							<div className="cart-item-quantity enhanced-quantity">
								<button
									className="quantity-btn quantity-btn--decrement"
									onClick={() => handleQuantityChange(idx, -1)}
									aria-label="Decrease quantity"
								>
									-
								</button>
								<span className="quantity-display">{quantities[idx] || 1}</span>
								<button
									className="quantity-btn quantity-btn--increment"
									onClick={() => handleQuantityChange(idx, 1)}
									aria-label="Increase quantity"
								>
									+
								</button>
							</div>
							<button onClick={() => removeItem(item.id)} className="remove-btn" title="Remove from cart">
								<FaTrash />
							</button>
						</div>
					))}
					<div className='Total-amount'>
						<div>Total Amount: </div>
						<div>
							${totalAmount.toFixed(2)}
						</div>
					</div>
				</div>
			) : (
				<div className="cart-empty">
					<h2>Your cart is empty</h2>
					<p>Looks like you haven&apos;t added anything yet.</p>
				</div>
			)}
		</div>
	);
};

export default Cart;