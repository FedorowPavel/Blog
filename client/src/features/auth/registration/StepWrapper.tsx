import React, {cloneElement, createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';
import Title from "../../../common/components/ui/Title";
import {Box, Button, Card} from "@mui/material";
import {useStep} from "./useStep";

type Props = {
  title: string,
  children: JSX.Element
}

const StepWrapper: FC<Props> = ({title, children}) => {
  const {nextStep, prevStep, prevIsDisabled, isLastStep} = useStep()
  const [isCurrentFormValid, setIsCurrentFormValid] = useState()

  return (
      <Card sx={{
        minHeight: '500px',
        width: '40vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px'
      }}>
        <Title title={title} variant={'h5'}/>

        {cloneElement(children, {setIsCurrentFormValid})}

        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Button variant={'contained'} onClick={prevStep} disabled={prevIsDisabled}>Prev Step</Button>
          {
            !isLastStep
              ? <Button variant={'contained'} onClick={nextStep} disabled={!isCurrentFormValid}>Next Step</Button>
              : <Button variant={'contained'} onClick={nextStep}>Register</Button>
          }
        </Box>
      </Card>

  );
};

export default StepWrapper;
