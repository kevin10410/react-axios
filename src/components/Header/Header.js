import React from 'react';

import './Header.css';

const Header = () => (
  <header className="Header">
    <nav>
      <ul>
        <li>
          <a href="/"
          >Home</a>
        </li>
        <li>
          <a href="/new-post"
          >New Posts</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;