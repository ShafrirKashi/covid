import React, { useState } from "react";
import MainHeader from "../../UIKit/MainHeader/MainHeader";
import FloatingButton from "../../UIKit/FloatingButton/FloatingButton";
import TestLine from "../../UIKit/TestLine/TestLine";
import PopModal from "../../UIKit/PopModal/PopModal";
import QRcode from "../../Assets/img/qr.png";
import PCR from "../../Assets/img/pcrLogo.png";
import Antigen from "../../Assets/img/antigenLogo.png";
import Mosdi from "../../Assets/img/mosdiLogo.png";

import "./Main.css";

const dataToShow = [
  {
    name: "רונן כץ",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: 1649322772617,
    time: "12:40",
    status: "ממתין",
    number: "324153",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "רונן כץ",
    test: <img className="testLogo" src={Antigen} alt="" />,
    date: 1657322772617,
    time: "11:20",
    status: "מעבדה",
    number: "214252",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "עומר כץ",
    test: <img className="testLogo" src={Mosdi} alt="" />,
    date: 1648322772617,
    time: "08:45",
    status: "ממתין",
    number: "903456",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "דניאל כץ",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: 1645822772617,
    time: "18:10",
    status: "ממתין",
    number: "185256",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "רונן כץ",
    test: <img className="testLogo" src={Mosdi} alt="" />,
    date: 1641722772617,
    time: "12:30",
    status: "תחנת בדיקה",
    number: "853941",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "רונן כץ",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: 1648022772617,
    time: "13:20",
    status: "ממתין",
    number: "678534",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "יעל כץ",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: 1648822772617,
    time: "17:11",
    status: "תחנת בדיקה",
    number: "853632",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "יעל כץ",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: 1647322772617,
    time: "17:11",
    status: "תחנת בדיקה",
    number: "853632",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "יעל כץ",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: 1699322772617,
    time: "17:11",
    status: "תחנת בדיקה",
    number: "853632",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
];

function Main() {
  const [set, setSet] = useState("");

  return (
    <div className="Main">
      <div className="MainHeader">
        <MainHeader options={dataToShow} onChange={setSet} />
      </div>
      <div className="testLine">
        <TestLine details={dataToShow} filtering={set} />
      </div>
      <div className="FloatingButton">
        <FloatingButton variant="add" />
      </div>
    </div>
  );
}

export default Main;
