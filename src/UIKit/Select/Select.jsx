import React from "react";
import "./Select.css";

function Select() {

<script src="https://www.google.com/recaptcha/api.js"></script>

  return (
    <div className="SelectWrapper">
      <label>קופת חולים</label>
      <select className="Select" required>
        <option value="Null"> בחר/י את קופת החולים שלך </option>
        <option value="כללית"> כללית </option>
        <option value="לאומית"> לאומית </option>
        <option value="מכבי"> מכבי </option>
        <option value="מאוחדת"> מאוחדת </option>
      </select>
    </div>
  );
}

export default Select;
