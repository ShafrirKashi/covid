import React from "react";
import MainHeader from "../../UIKit/MainHeader/MainHeader";
import FloatingButton from "../../UIKit/FloatingButton/FloatingButton";
import TestLine from "../../UIKit/TestLine/TestLine";
import PopModal from "../../UIKit/PopModal/PopModal";
import QRcode from "../../Assets/img/qr.png";
import Barcode from "../../Assets/img/barcode.png";
import Tabs from '../../UIKit/Tabs/Tabs';
import "./Main.css";


const dataToShow = [
  {
    name: "רונן כץ",
    test: "PCR",
    date: "2/4/2022",
    time: "12:40",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "מאיר שלו",
    test: "PCR",
    date: "3/7/2021",
    time: "11:20",
    status: "מעבדה",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "רונית מימון",
    test: "PCR",
    date: "17/4/2023",
    time: "08:45",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "טל כהן",
    test: "PCR",
    date: "22/5/2022",
    time: "18:10",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "איציק מרציאנו",
    test: "PCR",
    date: "12/8/2022",
    time: "12:30",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "שני טלקר",
    test: "PCR",
    date: "21/7/2022",
    time: "13:20",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "מאיר דהן",
    test: "PCR",
    date: "12/5/2022",
    time: "17:11",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "שי ביטן",
    test: "PCR",
    date: "17/2/2022",
    time: "15:50",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
  {
    name: "מעיין רביץ",
    test: "PCR",
    date: "18/4/2022",
    time: "20:40",
    status: "ממתין",
    QR: <img className="QR__Img" src={QRcode} alt="" />,
    Barcode: <img className="QR__Img" src={Barcode} alt="" />,
  },
];

function Main() {
  return (
    <div className="Main">
      <div className="MainHeader">
        <MainHeader />
      </div>
      <div className="testLine">
        <TestLine details={dataToShow} />
      </div>
      <div className="Bottom">
        <div className="FloatingButton">
          <FloatingButton />
          <PopModal  />
        </div>
      </div>
    </div>
  );
}

export default Main;
