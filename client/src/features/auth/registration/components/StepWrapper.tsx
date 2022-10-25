import React, {cloneElement, FC, useEffect, useState} from 'react';
import Title from "../../../../common/components/ui/Title";
import {Box, Button, Card} from "@mui/material";
import {useStep} from "../hooks/useStep";
import {getRegistrationData} from "../utils/utils";
import {authApi} from "../store/authApi/AuthApi";
import {useNavigate} from "react-router-dom";
import {clearStoredRegistrationData} from "../../../../common/utils/utils";

type Props = {
  title: string,
  children: JSX.Element
}

const StepWrapper: FC<Props> = ({title, children}) => {
  const {nextStep, prevStep, prevIsDisabled, isLastStep} = useStep()
  const [isCurrentFormValid, setIsCurrentFormValid] = useState<boolean>()
  const [image, setImage] = useState<File>()
  const [registerUser, {data: user}] = authApi.useRegisterUserMutation()
  const navigate = useNavigate();


  const registerHandler = () => {
    const registrationData = getRegistrationData(image as File)
    registerUser(registrationData)
  }

  useEffect(() => {
    if(user) {
      navigate('/main')
    }
    return clearStoredRegistrationData()
  }, [user])

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

        {cloneElement(children, {setIsCurrentFormValid, setImage})}

        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Button variant={'contained'} onClick={prevStep} disabled={prevIsDisabled}>Prev Step</Button>
          {
            !isLastStep
              ? <Button variant={'contained'} onClick={nextStep} disabled={!isCurrentFormValid}>Next Step</Button>
              : <Button variant={'contained'} onClick={registerHandler} disabled={!isCurrentFormValid}>Register</Button>
          }
        </Box>
      </Card>

  );
};

export default StepWrapper;
