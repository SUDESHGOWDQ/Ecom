import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import useCart from '../../Hooks/useCart';

const Navbar = ({ search, setSearch, filter, setFilter }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items } = useCart();
  const cartCount = useMemo(() => items.length, [items]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to={'/'} style={{color:'white',textDecoration:'none'}}><h2>ShopEase</h2></Link>
      </div>

      {/* Hamburger Icon (only visible on mobile) */}
      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaTimes className="icon" />
        ) : (
          <FaBars className="icon" />
        )}
      </div>

      {/* Desktop Menu */}
      <div className="navbar-menu desktop-menu">
        <div className="navbar-search">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." />
        </div>
        <div className="navbar-filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men Clothing</option>
            <option value="women's clothing">Women Clothing</option>
          </select>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/shop" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Shop</Link>
          </li>
          <li>
            <Link to="/categories" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Categories</Link>
          </li>
          <li>
            <Link to="/contact" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
        <div className="navbar-icons">
          <FaUser className="icon" />
          <div className="cart">
            <Link to={'/cart'} onClick={() => setMenuOpen(false)}><FaShoppingCart className="icon" /></Link>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu (only visible when open) */}
      <div className={menuOpen ? "navbar-menu mobile-menu open" : "navbar-menu mobile-menu"}>
        <div className="navbar-search">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." />
        </div>
        <div className="navbar-filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men Clothing</option>
            <option value="women's clothing">Women Clothing</option>
          </select>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/shop" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Shop</Link>
          </li>
          <li>
            <Link to="/categories" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Categories</Link>
          </li>
          <li>
            <Link to="/contact" style={{color:'inherit', textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
        <div className="navbar-icons">
          <FaUser className="icon" />
          <div className="cart">
            <Link  to={'/cart'}><FaShoppingCart className="icon" /></Link>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
