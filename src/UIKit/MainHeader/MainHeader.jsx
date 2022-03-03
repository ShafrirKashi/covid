import React, {useState} from 'react';
import "./MainHeader.css";
import Biduk from "../../Assets/img/bidukLogoBlack.png";
import Search from "../../UIKit/Search/Search"
function MainHeader({onChange}) {


  return (
    <div>
      <div className="MainHeader">
        <div className="SearchMainWrapper">
          <Search onChange={(value) => onChange(value)}/>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
