import React, {FC} from 'react';
import {Controller, useForm} from "react-hook-form";
import {FormGroup, TextField} from "@mui/material";
import FormFieldWrapper from "../../../common/components/wrappers/FormFieldWrapper";
import PasswordVisibilityIcon from "../login/PasswordVisibilityIcon";
import {useCurrentFormValidityState} from "./useCurrentFormValidityState";
import {getDataFromSessionStorage, getValidationRules} from "../../../common/utils/utils";
import {useRegistrationFormDataChange} from "./useRegistrationFormDataChange";
import {CredentialsFormData, RegistrationFormFieldsEnum, RegistrationStorageKeys, StepProps} from "./types";

const defaultValues = {
  email: '',
  password: '',
  showPassword: false
}

const CredentialsStep: FC<StepProps> = ({setIsCurrentFormValid}) => {
  const { control, formState: {isValid, errors}, getValues, setValue, watch} = useForm<CredentialsFormData>({
    defaultValues: getDataFromSessionStorage(RegistrationStorageKeys.CREDENTIALS) || defaultValues,
    mode: 'all'
  });
  const {emailRules, passwordRules} = getValidationRules()

  useCurrentFormValidityState(isValid, setIsCurrentFormValid)
  useRegistrationFormDataChange(watch, RegistrationStorageKeys.CREDENTIALS)

  const toggleShowPassword = () => {
    setValue('showPassword', !getValues().showPassword)
  }

  return (
    <form>
      <FormGroup sx={{ display: "flex",  flexDirection: "column"}}>

        <Controller
          name="email"
          control={control}
          rules={emailRules}
          render={({field}) => (
            <FormFieldWrapper>
              <TextField
                {...field}
                fullWidth
                error={!!errors[RegistrationFormFieldsEnum.EMAIL]}
                helperText={errors[RegistrationFormFieldsEnum.EMAIL]?.message}
                autoFocus
                id='email'
                type='email'
                label='email'
                autoComplete='new-password'
              />
            </FormFieldWrapper>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={passwordRules}
          render={({field}) => (
            <FormFieldWrapper>
              <TextField
                {...field}
                id='password'
                type={getValues().showPassword ? 'text' : 'password'}
                label="Password"
                autoComplete='off'
                error={!!errors[RegistrationFormFieldsEnum.PASSWORD]}
                helperText={errors[RegistrationFormFieldsEnum.PASSWORD]?.message}
                InputProps={{
                  endAdornment: <PasswordVisibilityIcon watch={watch} toggleShowPassword={toggleShowPassword}/>
                }}
              />
            </FormFieldWrapper>
          )}
        />
      </FormGroup>
      {/*<pre>{JSON.stringify(watch(), null ,2)}</pre>*/}
      {/*<pre>{JSON.stringify(isValid, null ,2)}</pre>*/}
    </form>
  );

};

export default CredentialsStep;
