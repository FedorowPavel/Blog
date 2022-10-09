import React, {createContext, useContext, useEffect, useState} from 'react';
import {Box, Button, Step, StepLabel, Stepper} from "@mui/material";
import {useStep} from "./useStep";

const Registration = () => {
  const {currentStepNumber, currentStepComponent, steps} = useStep()

  return (
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <>
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

          {currentStepComponent()}
          {/*<pre>{JSON.stringify(location, null, 2)}</pre>*/}
        </>
      </Box>

  );
};

export default Registration;
