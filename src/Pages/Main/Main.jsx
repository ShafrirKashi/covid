import React, {useState} from "react";
import MainHeader from "../../UIKit/MainHeader/MainHeader";
import FloatingButton from "../../UIKit/FloatingButton/FloatingButton";
import TestLine from "../../UIKit/TestLine/TestLine";
import PopModal from "../../UIKit/PopModal/PopModal";
import Tabs from "../../UIKit/Tabs/Tabs";
import QRcode from "../../Assets/img/qr.png";
import barcode from "../../Assets/img/barcode.png";
import PCR from "../../Assets/img/pcrLogo.png";
import Antigen from "../../Assets/img/antigenLogo.png";
import Mosdi from "../../Assets/img/mosdiLogo.png";
import Bell from "../../Assets/img/bell.png";
import Mag from "../../Assets/img/mag.png";
import "./Main.css";


const dataToShow = [
  {
    name: "רונן כץ",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: "2/4/2022",
    time: "12:40",
    status: "ממתין",
    number: "324153",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "מאיר שלו",
    test: <img className="testLogo" src={Antigen} alt="" />,
    date: "3/7/2021",
    time: "11:20",
    status: "מעבדה",
    number: "214252",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "רונית מימון",
    test: <img className="testLogo" src={Mosdi} alt="" />,
    date: "17/4/2023",
    time: "08:45",
    status: "ממתין",
    number: "903456",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "טל כהן",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: "22/5/2022",
    time: "18:10",
    status: "ממתין",
    number: "185256",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "איציק מרציאנו",
    test: <img className="testLogo" src={Mosdi} alt="" />,
    date: "12/8/2022",
    time: "12:30",
    status: "תחנת בדיקה",
    number: "853941",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "שני טלקר",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: "21/7/2022",
    time: "13:20",
    status: "ממתין",
    number: "678534",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "מאיר דהן",
    test: <img className="testLogo" src={PCR} alt="" />,
    date: "12/5/2022",
    time: "17:11",
    status: "תחנת בדיקה",
    number:"853632",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
   
  },
  {
    name: "שי ביטן",
    test: <img className="testLogo" src={Mosdi} alt="" />,
    date: "17/2/2022",
    time: "15:50",
    status: "ממתין",
    number: "558681",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
  },
  {
    name: "מעיין רביץ",
    test: <img className="testLogo" src={Antigen} alt="" />,
    date: "18/4/2022",
    time: "20:40",
    status: "מעבדה",
    number: "315475",
    qr: <img className="QR__Img" src={QRcode} alt="" />,
   
  },
];

function Main() {

  const [set, setSet] = useState("")
  const [focus, setFocus] = useState(false)

  
  return (
    <div className="Main">
      <div className="MainHeader">
        <MainHeader focus={focus} options={dataToShow} onChange={setSet}/>
      </div>
      <div className="testLine">
        <TestLine details={dataToShow} filtering={set} />
      </div>
      <div className="Bottom">
        <div className="MainLeftLogo">
          <img className="BellIcon" src={Bell} alt="" />
        </div>
        <div className="FloatingButton">
          <FloatingButton />
          <PopModal />
        </div>
        <div onClick={() => setFocus(true)} className="MainRightLogo">
          <img className="MagIcon"  src={Mag} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
