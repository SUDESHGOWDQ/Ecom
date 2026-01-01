import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Card = React.memo(({ data, handleAddCart }) => {
	const onAddCart = useCallback((item) => {
		handleAddCart(item);
	}, [handleAddCart]);

	return (
		<div className='Card'>
			{data.map((item) => (
				<div className='card-item' key={item.id}>
					<Link to={`/about/${item.id}`}>
					<img className='product-img' src={item.image} alt={item.title} />
					</Link>
					<div className='product-title'>{item.title}</div>
					<div className='product-price'>${item.price}</div>
					<button onClick={() => onAddCart(item)}>Add to Cart</button>
				</div>
			))}
		</div>
	);
});

export default Card;