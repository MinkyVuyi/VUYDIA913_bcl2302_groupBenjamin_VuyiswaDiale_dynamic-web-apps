import React from 'react';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/favorites">Favorites</a></li>
          <li><a href="/categories">Categories</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
