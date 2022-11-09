import React from 'react';
import {Box} from "@mui/material";
import {useStep} from "../hooks/useStep";
import HeaderStepper from "./HeaderStepper";

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
