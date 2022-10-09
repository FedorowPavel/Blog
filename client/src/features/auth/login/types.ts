
export interface LoginFormData {
  email: string;
  password: string;
  showPassword: boolean;
}

export interface PersonalInfoFormData {
  phone: string;
  gender: string;
  nationality: string;
}

export interface ImageInfoFormData {
  image: any;
}

export enum LoginFormFieldsEnum {
  EMAIL ='email',
  PASSWORD = 'password'
}
