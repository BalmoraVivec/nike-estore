import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <a href="/">Home</a>
          <input type="text" placeholder="Search" className="search-bar" />
          <a href="/liked">❤️</a>
          <a href="/cart">🛒</a>
        </nav>
      </header>
    );
  };
  
export default Header;