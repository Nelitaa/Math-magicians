import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="background-style">
      <nav>
        <h1>Math Magicians</h1>
        <button type="button" id="mobile-nav" className="background-style">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <ul id="desktop-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
      <div id="mobile-menu" className="background-style">
        <span id="x-button" className="material-symbols-outlined">cancel</span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
