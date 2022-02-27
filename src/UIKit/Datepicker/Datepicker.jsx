import React, { useState } from "react";
import DatePicker from "react-mobile-datepicker";
import "./Datepicker.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Calender from "../../Assets/img/calender.png";
import "./Datepicker.css";

const convertDate = (date, formate) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return formate
    .replace(/Y+/, year)
    .replace(/M+/, month)
    .replace(/D+/, day)
    .replace(/h+/, hour)
    .replace(/m+/, minute)
    .replace(/s+/, second);
};

function Datepicker(props) {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSelect = (time) => {
    setTime(time);
    setIsOpen(false);
  };

  // const handleValue = (props, time) => {
  //   convertDate(time, "DD/MM/YYYY");
  //   props.getDate(convertDate(time))
  // };

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          "& > :not(style)": {mr:0.9 ,mt: 5,mb:2, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="date"
          type="text"
          onClick={handleClick}
          inputFormat="dd/MM/yyyy"
          value={convertDate(time, "DD/MM/YYYY")}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <img className="calender-img" src={Calender} alt="" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <DatePicker
        value={time}
        isOpen={isOpen}
        onSelect={handleSelect}
        onCancel={handleCancel}
        dateFormat={["DD" / "MM" / "YYYY"]}
        showFormat="'DD/MM/YYYY'"
        confirmText="אישור"
        cancelText="ביטול"
        theme="android"
        showHeader={false}
      />
    </div>
  );
}

export default Datepicker;
