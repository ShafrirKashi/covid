import React from "react";
import MainHeader from "../../UIKit/MainHeader/MainHeader";
import FloatingButton from "../../UIKit/FloatingButton/FloatingButton";
import TestLine from "../../UIKit/TestLine/TestLine";
import "./Main.css";

const dataToShow = [
  {name: "רונן כץ", test: "PCR", date: "2/4/2022", status: "ממתין"},
  {name: "מאיר שלו", test: "PCR", date: "3/7/2021", status: "ממתין"},
  {name: "נפתלי בנט", test: "PCR", date: "17/4/2023", status: "ממתין"},
  {name: "איציק מרציאנו", test: "PCR", date: "22/5/2022", status: "ממתין"},
]

function Main() {
  return (
    <div className="Main">
      <div className="MainHeader">
        <MainHeader />
      </div>
      <div className="testLine">
        <TestLine
          datas={dataToShow}
        />
      </div>
      <div className="Bottom">
        <div className="FloatingButton">
          <FloatingButton />
        </div>
      </div>
    </div>
  );
}

export default Main;
