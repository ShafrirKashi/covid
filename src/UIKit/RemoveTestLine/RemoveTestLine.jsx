import React from "react";
import Checkbox from "../../UIKit/Checkbox/Checkbox";
import Button from "../../UIKit/Button/Button";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./RemoveTestLine.css";

function RemoveTestLine() {
  return (
    <div className="RemoveTestLineWrapper">
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="אני מאשר לבטל בדיקה זאת"
      />
      <div className="buttons">
      <Button text="אישור" />
      <Button text="ביטול" />
      </div>
    </div>
  );
}

export default RemoveTestLine;
