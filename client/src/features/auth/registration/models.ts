import {FC} from "react";

export interface RegistrationStep {
  title: string,
  component: FC,
}

export enum StepTitlesEnum {
  CREDENTIALS = 'Email and password',
  PERSONAL_INFO = 'Personal Info',
  USER_IMAGE = 'User image'
}
