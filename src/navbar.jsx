import React from 'react';
import './App.css';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h2>🛍️ ShopMart</h2>
      <button className="btn cart-btn" onClick={onCartClick}>
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
