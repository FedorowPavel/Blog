
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
  setImage?: (state: FileList) => void
}

export enum RegistrationStorageKeys {
  CREDENTIALS = 'credentials',
  PERSONAL_INFO = 'personalInfo',
}

export const registrationDataKeys = [RegistrationStorageKeys.CREDENTIALS, RegistrationStorageKeys.PERSONAL_INFO]

export interface PersonalInfoFormData {
  phone: string;
  nickname: string;
}

export interface CredentialsFormData {
  email: string;
  password: string;
  showPassword: boolean;
}

export interface RegistrationData extends Omit<CredentialsFormData, 'showPassword'>, PersonalInfoFormData {
  image: FileList
}

export enum RegistrationFormFieldsEnum {
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
  NICKNAME = 'nickname'
}

