import React from "react";
import "./Select.css";

function Select({name}) {

<script src="https://www.google.com/recaptcha/api.js"></script>

  return (
    <div className="SelectWrapper">
      <label>קופת חולים</label>
      <select className="Select" required name={name}>
        <option value="Null"> בחר/י את קופת החולים שלך </option>
        <option value="clalit"> כללית </option>
        <option value="leumit"> לאומית </option>
        <option value="macabi"> מכבי </option>
        <option value="united"> מאוחדת </option>
        <option value="idf"> צה"ל </option>
      </select>
    </div>
  );
}

export default Select;
