import React, { useMemo } from 'react';
import Card from '../../Components/Card/index';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';

const Home = ({ search, filter }) => {
	const { products, loading } = useProducts();
	const { addItem } = useCart();

	const filteredProducts = useMemo(() => {
		let result = products;
		if (filter && filter !== 'All') {
			result = result.filter(p => p.category === filter);
		}
		if (search) {
			result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
		}
		return result;
	}, [products, filter, search]);

	if (loading) return <div>Loading...</div>;

	return (
		<div className='Home'>
			<Card data={filteredProducts} handleAddCart={addItem} />
		</div>
	);
};

export default Home;