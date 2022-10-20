import React from 'react';
import {Box} from "@mui/material";
import {useStep} from "./useStep";
import HeaderStepper from "./HeaderStepper";
import StepWrapper from "./StepWrapper";

const Registration = () => {
  const {currentStepComponent} = useStep()

  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <HeaderStepper/>
      {currentStepComponent()}
    </Box>

  );
};

export default Registration;
