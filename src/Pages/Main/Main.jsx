import React from "react";
import MainHeader from "../../UIKit/MainHeader/MainHeader";
import FloatingButton from "../../UIKit/FloatingButton/FloatingButton";
import TestLine from "../../UIKit/TestLine/TestLine";
import "./Main.css";

const dataToShow = [
  {name: "רונן כץ", test: "PCR", date: "2/4/2022", time: "12:40", status: "ממתין"},
  {name: "מאיר שלו", test: "PCR", date: "3/7/2021", time: "11:20", status: "מעבדה"},
  {name: "נפתלי בנט", test: "PCR", date: "17/4/2023", time: "08:45", status: "ממתין"},
  {name: "איציק מרציאנו", test: "PCR", date: "22/5/2022", time: "18:10", status: "ממתין"},
  {name: "איציק מרציאנו", test: "PCR", date: "22/5/2022", time: "18:10", status: "ממתין"},
  {name: "איציק מרציאנו", test: "PCR", date: "22/5/2022", time: "18:10", status: "ממתין"},
  {name: "איציק מרציאנו", test: "PCR", date: "22/5/2022", time: "18:10", status: "ממתין"},
  {name: "איציק מרציאנו", test: "PCR", date: "22/5/2022", time: "18:10", status: "ממתין"},
  {name: "איציק מרציאנו", test: "PCR", date: "22/5/2022", time: "18:10", status: "ממתין"},
]

function Main() {
  return (
    <div className="Main">
      <div className="MainHeader">
        <MainHeader />
      </div>
      <div className="testLine">
        <TestLine
          details={dataToShow}
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
