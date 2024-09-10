import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create a corresponding CSS file

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-link">
        <div className="logo">Fit.IO</div>
      </Link>
    </div>
  );
};

export default Header;