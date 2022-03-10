import React, { useState } from "react";
import "./MainHeader.css";
import Search from "../../UIKit/Search/Search";
import Hamburger from "../../UIKit/HamburgerIcon/HamburgerIcon";
import Bell from "../../Assets/img/bell.png";
import Mag from "../../Assets/img/mag.png";
import Biduk from "../../Assets/img/bidukLogoBlack.png";
import MenuIcon from '@mui/icons-material/Menu';

function MainHeader({ onChange, focus }) {
  const [state, setState] = useState(false);

  return (
    <div>
      <div className="MainHeader">
        <div className="SearchMainWrapper">
          {state === false ? (
            <div className="MainHeaderDefault">
              <div className="MainLogos">
                <img className="BellIcon" src={Bell} alt="" />
                <MenuIcon />
                <span className="MainLogoText"> דף בדיקות אישי</span>
                <div onClick={() => setState(true)} className="MainRightLogo">
                  <img className="MagIcon" src={Mag} alt="" />
                </div>
              </div>
              {/* <p className="MainLogoText">דף בדיקות</p> */}
            </div>
          ) : null}

          {state ? (
            <div className="SearchMain">
              <div onClick={() => setState(false)} className="HamburgerIcon">
                <Hamburger />
              </div>
              <Search onChange={(value) => onChange(value)} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
