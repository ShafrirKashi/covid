import React, {useState} from 'react';
import "./MainHeader.css";
import Biduk from "../../Assets/img/bidukLogoBlack.png";
import Search from "../../UIKit/Search/Search"
import Hamburger from "../../UIKit/HamburgerIcon/HamburgerIcon"

function MainHeader({onChange, focus}) {


  return (
    <div>
      <div className="MainHeader">
        <div className="SearchMainWrapper">
          <div className="HamburgerIcon">
          <Hamburger />
          </div>
          <Search focus={focus} onChange={(value) => onChange(value)}/>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
