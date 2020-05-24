import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerSubHead">
          This is a working demo of a blog platform.
        </div>
        <div className="footerBody">
          The front-end of this demo was created using React, React Router, and Redux. The back-end is a Node Express API server. This demo is best experienced on a desktop browser.
        </div>
      </div>
      <div className="footerHr"> </div>
      <nav className="footerNav">
        <div className="footerLogo">Average</div>
        <div>
          <Link className="footerNavLinks" to="/">Blog</Link>
          <Link className="footerNavLinks" to="/new">Add a Post</Link>
        </div>
      </nav>
    </div>
  )
}

export default Footer;