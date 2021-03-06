import React, { useState } from "react";
import "./MainHeader.css";
import Search from "../../UIKit/Search/Search";
import Dropdown from "../../UIKit/Dropdown/Dropdown";
import Bell from "../../Assets/img/bell.png";
import Mag from "../../Assets/img/mag.png";
import Biduk from "../../Assets/img/bidukLogoBlack.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function MainHeader({ onChange, focus }) {
  const [state, setState] = useState(false);

  return (
    <div>
      <div className="MainHeader">
        <div className="SearchMainWrapper">
          {state === false ? (
            <div className="MainHeaderDefault">
              <div className="MainHeaderMain">
                  <div className="dropDown">
                    <Dropdown />
                  </div>
                  <img src={Biduk} alt="" />
                  <div className="MainHeaderIcons">
                    <img className="BellIcon" src={Bell} alt="" />
                    <div
                      onClick={() => setState(true)}
                      className="MainRightLogo"
                    >
                      <img className="MagIcon" src={Mag} alt="" />
                    </div>
                  </div>
              </div>
              <span className="MainLogoText">רשימת הבדיקות</span>
            </div>
          ) : null}

          {state ? (
            <div className="SearchMain">
              <div onClick={() => setState(false)} className="ArrowIcon">
                <ArrowBackIcon />
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
