import React from "react";
import "./MainHeader.css";
import Biduk from "../../Assets/img/bidukLogoBlack.png";
import Bell from "../../Assets/img/bell.png";
import Mag from "../../Assets/img/mag.png";
function MainHeader() {
  return (
    <div>
      <div className="MainHeader">
        <div className="MainRightLogo">
          <img className="MagIcon" src={Mag} alt="" />
        </div>
        <div className="MainLeftLogo">
          <img className="BellIcon" src={Bell} alt="" />
        </div>
        <div className="LogoMainWrapper">
          <img className="LogoMainPage" src={Biduk} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
