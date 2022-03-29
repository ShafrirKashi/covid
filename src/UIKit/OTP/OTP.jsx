import React, { useState } from "react";
import OtpInput from "react-otp-input";

function OTP({ stateChange }) {
  const [otp, setOtp] = useState("");
  const [otpSuccess, setOtpSuccess] = useState("");
  
  const inputStyle = {
    width: "3rem",
    height: "3rem",
    margin: "0 1rem",
    fontSize: "2rem",
  };

  // const handleBack = () => {
  //     if (otp === 1111){
  //         changeState("/main")
  //     };
  //   };

  return (
    <div >
      <OtpInput
        value={otp}
        onChange={(e) => {
            setOtp(e);
            stateChange(e)
        }}
        numInputs={4}
        separator={<span> - </span>}
        isInputNum
        // shouldAutoFocus
        inputStyle={inputStyle}
      />
    </div>
  );
}

export default OTP;
