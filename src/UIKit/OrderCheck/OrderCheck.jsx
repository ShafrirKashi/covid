import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Select from "../../UIKit/Select/Select"
import Input from "../../UIKit/Input/Input"
import Typography from "@mui/material/Typography";
import './OrderCheck.css'


const steps = [
  {
    label: "בחר עיר",
    description:
    <div className="Sele">
    <Select variant="city" label="קופת חולים" />
    </div>
  },
  {
    label: "בחר תחנת בדיקה",
    description:   <div className="Sele">
    <Select variant="city" label="קופת חולים" />
    </div>
    
  },
  {
    label: "בחר תאריך בדיקה",
    description:   <div className="Sele">
    <Select variant="city" label="קופת חולים" />
    </div>
  },
  {
    label: "בחר שעת בדיקה",
    description:    <div className="Sele">
    <Select variant="city" label="קופת חולים" />
    </div>
  },
];

export default function VerticalLinearStepper() {
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

  return (
    <div className="VerticalLinearStepper" >
      <Stepper alternativeLabel activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <div className="mashu" >
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "המשך" : "המשך"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    חזור
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>כל השלבים הושלמו בהצלחה!</Typography>
          <Button type="submit"  href="/main"  sx={{ mt: 1, mr: 0 }}>
            הזמן בדיקה
          </Button>
          <Button type="submit" onClick={handleReset} sx={{ mt: 1, mr: 3.5 }}>
             מלא מחדש
          </Button>
        </Paper>
      )}
    </div>
  );
}
