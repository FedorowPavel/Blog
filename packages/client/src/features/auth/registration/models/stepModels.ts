export interface RegistrationStep {
  title: string,
  component: JSX.Element,
}

export enum StepTitlesEnum {
  CREDENTIALS = 'Email and password',
  PERSONAL_INFO = 'Personal Info',
  USER_IMAGE = 'User image'
}

export type StepProps = {
  setIsCurrentFormValid: (state: boolean) => void,
  setImage?: (state: File) => void
}
