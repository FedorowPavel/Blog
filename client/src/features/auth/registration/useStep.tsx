import {useLocation, useNavigate} from "react-router-dom";
import CredentialsStep from "./CredentialsStep";
import PersonalInfoStep from "./PersonalInfoStep";
import ImageStep from "./ImageStep";
import {RegistrationStep, StepTitlesEnum} from "./models";
import StepWrapper from "./StepWrapper";

const steps: RegistrationStep[] = [
  {title: StepTitlesEnum.CREDENTIALS, component: <CredentialsStep setIsCurrentFormValid={()=>{}}/>},
  {title: StepTitlesEnum.PERSONAL_INFO, component: <PersonalInfoStep setIsCurrentFormValid={()=>{}}/>},
  {title: StepTitlesEnum.USER_IMAGE, component: <ImageStep setIsCurrentFormValid={()=>{}}/>},
]

export function useStep() {
  const location = useLocation()
  const navigate = useNavigate();

  const currentStepNumber = location.state || 0

  const currentStepComponent = () => {
    return (
      <StepWrapper title={steps[currentStepNumber].title}>
        {steps[currentStepNumber].component}
      </StepWrapper>)
  }

  const nextStep = () => {
    navigate({}, {state: location.state === steps.length - 1 ? location.state : location.state + 1})
  }

  const prevStep = () => {
    navigate({}, {state: location.state === 0 ? 0 : location.state - 1})
  }

  const initStep = () => {
    navigate({}, {state: 0})
  }

  const prevIsDisabled = !location.state
  const isLastStep = location.state === steps.length - 1

  return {nextStep, prevStep, initStep, currentStepNumber, currentStepComponent, steps, prevIsDisabled, isLastStep}
}
