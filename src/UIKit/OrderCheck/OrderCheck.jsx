import React, { useState } from "react";
import Box from "@mui/material/Box";
import Select from "../../UIKit/Select/Select";
import PopModal from "../PopModal/PopModal";
import Datepicker from "../Datepicker/Datepicker";

import Autocomplete from "../../UIKit/Autocomplete/Autocomplete";
import Typography from "@mui/material/Typography";
import "./OrderCheck.css";

export default function VerticalLinearStepper() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: "עיר",
      description: (
        <div className="Sele">
          <Autocomplete disablePortal variant="city" label="בחר עיר" />
        </div>
      ),
    },
    {
      label: "תחנת בדיקה",
      description: (
        <div className="Sele">
          <Select variant="city" label="בחר תחנת בדיקה" />
        </div>
      ),
    },
    {
      label: "תאריך בדיקה",
      description: (
        <div className="Sele">
          <Select variant="city" label="בחר תאריך בדיקה" />
        </div>
      ),
    },
    {
      label: "שעת בדיקה",
      description: (
        <div className="Sele">
          <Select variant="city" label="בחר שעת בדיקה" />
        </div>
      ),
    },
  ];

  return (
    <div className="OrderCheckWrapper">
      <div className="orderCheckHeader">
        <div className="OrderHeaderText">
          <h3>הזמנת בדיקה חדשה </h3>
          <a onClick={onOpenModal}>לחץ להוספת ילד </a>
        </div>
        <PopModal
          variant="addChild"
          open={open}
          closeIt={(open) => setOpen(false)}
        />
      </div>
      <div className="formSpace">
        <Autocomplete variant="testType"></Autocomplete>
        <Autocomplete variant="city"></Autocomplete>
        <Autocomplete variant="station"></Autocomplete>
        <Datepicker />
        </div>
    </div>
  );
}
