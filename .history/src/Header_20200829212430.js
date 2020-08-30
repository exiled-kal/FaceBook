import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <div className="header__left">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>

      <div className="header__middle"></div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
