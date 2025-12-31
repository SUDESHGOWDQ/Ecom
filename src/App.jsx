import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import { UserProvider } from './context/UserContext';

const App = () => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");

	return (
		<UserProvider>
			<ProductsProvider>
				<CartProvider>
					<Router>
						<Navbar search={search} filter={filter} setFilter={setFilter} setSearch={setSearch} />
						<Routes>
							<Route path='/' element={<Home search={search} filter={filter} />} />
							<Route path='/cart' element={<Cart />} />
						</Routes>
						<Footer />
					</Router>
				</CartProvider>
			</ProductsProvider>
		</UserProvider>
	);
};

export default App;