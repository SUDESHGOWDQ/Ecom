import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import About from './Pages/About';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';


const App = () => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");

	return (
		<div>
			<ProductsProvider>
				<CartProvider>
					<Router>
						<Navbar search={search} filter={filter} setFilter={setFilter} setSearch={setSearch} />
						<Routes>
							<Route path='/' element={<Home search={search} filter={filter} />} />
							<Route path='/about/:id' element={<About/>}/>
							<Route path='/cart' element={<Cart />} />
						</Routes>
						<Footer />
					</Router>
				</CartProvider>
			</ProductsProvider>
		</div>
	);
};

export default App;