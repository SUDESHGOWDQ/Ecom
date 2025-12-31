
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-section">
          <h2>ShopEase</h2>
          <p>Your one-stop shop for all your needs. Quality products at the best prices.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" style={{color:'inherit', textDecoration:'none'}}>Home</Link></li>
            <li><Link to="/shop" style={{color:'inherit', textDecoration:'none'}}>Shop</Link></li>
            <li><Link to="/categories" style={{color:'inherit', textDecoration:'none'}}>Categories</Link></li>
            <li><Link to="/contact" style={{color:'inherit', textDecoration:'none'}}>Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
