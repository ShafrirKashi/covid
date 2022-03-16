import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Select from "../../UIKit/Select/Select";
import PopModal from "../PopModal/PopModal";

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
        <span>שלום אורח/ת </span>
        <span onClick={onOpenModal}>לחץ להוספת ילד </span>
        <PopModal
          variant="addChild"
          open={open}
          closeIt={(open) => setOpen(false)}
        />
      </div>
      <Box sx={{ maxWidth: 400, pb: 10 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div className="OrderCheck__Btn">
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "סיים" : "המשך"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      חזור
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography></Typography>
            <Button
              variant="contained"
              onClick={handleReset}
              sx={{ width: 300, mt: 1, mr: 1 }}
            >
              הזמן בדיקה
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
