import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


/** Main header and nav bar */

function Header() {
  return (
    <div className="Header">
      <nav className="headerNav" >
        <div className="logo">Average</div>
        <div className="navLinks">
          <Link to="/">Blog</Link>
          <Link className="linkAddPost" to="/new">Add a Post</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header;