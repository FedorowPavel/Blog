import React, {FC, useCallback, useEffect} from 'react';
import {Controller, useForm, useFormState} from "react-hook-form";
import {LoginFormData, LoginFormFieldsEnum} from "../login/types";
import {FormGroup, TextField} from "@mui/material";
import FormFieldWrapper from "../../../common/components/wrappers/FormFieldWrapper";
import PasswordVisibilityIcon from "../login/PasswordVisibilityIcon";
import {useCurrentFormValidityState} from "./useCurrentFormValidityState";
import {StepProps} from "./models";
import {useValidationRules} from "../../../common/hooks/useValidationRules";

const defaultFormValues = {
  email: '',
  password: '',
  showPassword: false
}

const CredentialsStep: FC<StepProps> = ({setIsCurrentFormValid}) => {
  const {
    control,
    formState: {isValid, errors},
    getValues,
    setValue,
    watch,
  } = useForm<LoginFormData>({defaultValues: defaultFormValues, mode: 'all'});
  const {emailRules, passwordRules} = useValidationRules()

  useCurrentFormValidityState(isValid, setIsCurrentFormValid)

  const toggleShowPassword = useCallback(() => {
    setValue('showPassword', !getValues().showPassword)
  }, [])

  useEffect(() => {
    sessionStorage.setItem('credentials', JSON.stringify(watch()))
  }, [watch()])

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
                error={!!errors[LoginFormFieldsEnum.EMAIL]}
                helperText={errors[LoginFormFieldsEnum.EMAIL]?.message}
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
                error={!!errors[LoginFormFieldsEnum.PASSWORD]}
                helperText={errors[LoginFormFieldsEnum.PASSWORD]?.message}
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
