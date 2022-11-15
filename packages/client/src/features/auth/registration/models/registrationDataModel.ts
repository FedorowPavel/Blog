import {CredentialsFormData} from "../../baseAuth/models/types";

export enum RegistrationStorageKeys {
  CREDENTIALS = 'credentials',
  PERSONAL_INFO = 'personalInfo',
}

export const registrationDataKeys = [
  RegistrationStorageKeys.CREDENTIALS,
  RegistrationStorageKeys.PERSONAL_INFO
]

export interface PersonalInfoFormData {
  phone: string;
  nickname: string;
}

export interface RegistrationData extends Omit<CredentialsFormData, 'showPassword'>, PersonalInfoFormData {
  image: File
}

export enum RegistrationFormFieldsEnum {
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
  NICKNAME = 'nickname'
}

