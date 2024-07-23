import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <Link to="/new-featured">New & Featured</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/sale">Sale</Link>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="cart-likes">
        <Link to="/likes">❤️</Link>
        <Link to="/cart">🛒</Link>
      </div>
    </header>
  );
};

export default Header;