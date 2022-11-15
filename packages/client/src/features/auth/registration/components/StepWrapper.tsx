import React, {cloneElement, FC, useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import {useStep} from "../hooks/useStep";
import {getRegistrationData} from "../utils/utils";
import {registrationApi} from "../store/api/api";
import {useNavigate} from "react-router-dom";
import BlogSimpleCard from "../../../../common/components/ui/BlogSimpleCard";
import BlogFullCoveringSpinner from "../../../../common/components/ui/BlogFullCoveringSpinner";
import {QueryFixedCacheKeysENUM} from "../../../../common/constants";
import BlogTitle from '../../../../common/components/ui/BlogTitle';
import {clearStoredRegistrationData} from "../../../../common/utils/sessionStorageUtils";

type Props = {
  title: string,
  children: JSX.Element
}

const StepWrapper: FC<Props> = ({title, children}) => {
  const navigate = useNavigate()
  const {nextStep, prevStep, prevIsDisabled, isLastStep} = useStep()
  const [isCurrentFormValid, setIsCurrentFormValid] = useState<boolean>()
  const [image, setImage] = useState<File>()
  const [registerUser, {isLoading}] = registrationApi.useRegisterUserMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.REGISTER_USER,
  })

  const registerHandler = () => {
    const registrationData = getRegistrationData(image as File)
    registerUser({registrationData, navigate})
  }

  useEffect(() => {
    return clearStoredRegistrationData()
  }, [])

  return (
    <BlogSimpleCard sxProps={{
      minHeight: '500px',
      width: '40vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <BlogTitle title={title} variant={'h5'}/>

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
      <BlogFullCoveringSpinner isLoading={isLoading}/>
    </BlogSimpleCard>


  );
};

export default StepWrapper;
