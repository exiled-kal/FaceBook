import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <div className="header__left">
          <img
          src="https:upload.wikimedia.org/wikipedia/commons/thumb/"
          />
      </div>

      <div className="header__middle"></div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
