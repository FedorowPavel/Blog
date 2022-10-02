import React, {useEffect} from 'react';
import {Box, Button, Step, StepLabel, Stepper} from "@mui/material";
import RegistrationForm from "./RegistrationForm";
import { useLocation, useNavigate } from 'react-router-dom';


const steps = [
  'User name and password',
  'Personal Info',
  'Avatar',
];

const Registration = () => {
  const location = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location)
  }, [])

  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Stepper activeStep={location.state || 0} alternativeLabel>
        {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
      <Button title='change location state' onClick={() => navigate({}, {state: location.state + 1})}>next step</Button>
      <Button title='change location state' onClick={() => navigate({}, {state: 0})}>reset location state</Button>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    <RegistrationForm/>
    </Box>
  );
};

export default Registration;
