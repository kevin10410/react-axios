import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header className="Header">
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-post" exact>
            New Post
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;