import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import './ReCAPTCHA.css'

function Recaptcha() {

    function onChange(value) {
        console.log("Captcha value:", value);
      }


  return (
    <div>
          <ReCAPTCHA
           sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
           onChange={onChange}/>,
    </div>
  )
}

export default Recaptcha