import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './index.css';

const ProductDetail = () => {
	const { id } = useParams();
	const { products, loading } = useProducts();

	if (loading) return <div>Loading...</div>;

	const product = products.find((p) => String(p.id) === String(id));

	if (!product) return <div>Product not found.</div>;

	return (
		<div className="product-detail">
          <img className="product-detail-img" src={product.image} alt={product.title} />
			<div className="product-detail-info">
				<h2>{product.title}</h2>
				<p>{product.description}</p>
				<div className="product-detail-price">${product.price}</div>
				<div className="product-detail-category">Category: {product.category}</div>
			</div>
		</div>
	);
};

export default ProductDetail;