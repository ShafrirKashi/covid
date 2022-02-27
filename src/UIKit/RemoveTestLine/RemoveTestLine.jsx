import React from "react";
import Checkbox from "../../UIKit/Checkbox/Checkbox";
// import Button from "../../UIKit/Button/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

import "./RemoveTestLine.css";

function RemoveTestLine({details}) {

  console.log(details)
  return (
    <div className="RemoveTestLineWrapper">
      <FormControlLabel
        control={<Checkbox  />}
        label="אני מאשר לבטל בדיקה זאת"
      />
      <div className="buttons">
        <Button
          href="/main"
          type="submit"
          fullWidth
          variant="contained"

          sx={{  mr: 2, ml: 2 }}        >
          אישור
        </Button>{" "}
        <Button
          href="/main"
          type="submit"
          color="info"
          fullWidth
          variant="contained"
          sx={{mr: 2, ml: 2 }}
        >
          ביטול
        </Button>{" "}
      </div>
    </div>
  );
}

export default RemoveTestLine;
