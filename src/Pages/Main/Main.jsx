import React from "react";
import MainHeader from "../../UIKit/MainHeader/MainHeader";
import FloatingButton from "../../UIKit/FloatingButton/FloatingButton";
import TestLine from "../../UIKit/TestLine/TestLine";
import "./Main.css";

const dataToShow = [
  {name: "Dani", Test: "PCR", Date: "2/4/2022", Time: "13:37"},
  {name: "Michael", Test: "PCR", Date: "3/7/2021", Time: "12:32"},
  {name: "David", Test: "PCR", Date: "17/4/2023", Time: "08:22"},
  {name: "Yossi", Test: "PCR", Date: "22/5/2022", Time: "09:44"},
]

function Main() {
  return (
    <div className="Main">
      <div className="MainHeader">
        <MainHeader />
      </div>
      <div className="testLine">
        <TestLine
          data={dataToShow}
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
