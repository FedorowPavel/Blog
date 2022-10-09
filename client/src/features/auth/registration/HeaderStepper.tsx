import React from 'react';
import {Step, StepLabel, Stepper} from "@mui/material";
import {useStep} from "./useStep";

const HeaderStepper = () => {
  const {currentStepNumber, steps} = useStep()

  return (
    <Stepper
      activeStep={currentStepNumber}
      alternativeLabel
      sx={{
        width: '90vw',
        margin: '40px 0'
      }}
    >
      {steps.map(({title}) => (
        <Step key={title}>
          <StepLabel>{title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default HeaderStepper;
