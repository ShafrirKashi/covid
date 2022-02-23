import React, { useState } from "react";
import DatePicker from "react-mobile-datepicker";
import "./Datepicker.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

class Datepicker extends React.Component {
  state = {
    time: new Date(1990, 0, 1),
    isOpen: false,
  };

  
  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  handleSelect = (time) => {
    this.setState({ time, isOpen: false });
  };

  render() {
    return (
      <div onClick={this.handleClick} className="App">
        <p className="select-time">
          {this.convertDate(this.state.time, "DD/MM/YYYY")}
        </p>

        <DatePicker
          value={this.state.time}
          isOpen={this.state.isOpen}
          onSelect={this.handleSelect}
          onCancel={this.handleCancel}
          confirmText="אישור"
          cancelText="ביטול"
          min={new Date(1910, 0, 1)}
          max={new Date()}
        />
      </div>
    );
  }
}

export default Datepicker;
