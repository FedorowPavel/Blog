import React, {FC, useCallback} from 'react';
import {Controller, useForm, useFormState} from "react-hook-form";
import {LoginFormData, LoginFormFieldsEnum} from "../login/types";
import {FormGroup, TextField} from "@mui/material";
import FormFieldWrapper from "../../../common/components/wrappers/FormFieldWrapper";
import PasswordVisibilityIcon from "../login/PasswordVisibilityIcon";
import {useCurrentFormValidityState} from "./useCurrentFormValidityState";
import {StepProps} from "./models";

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
    watch
  } = useForm<LoginFormData>({defaultValues: defaultFormValues, mode: 'onChange'});

  useCurrentFormValidityState(isValid, setIsCurrentFormValid)

  const toggleShowPassword = useCallback(() => {
    setValue('showPassword', !getValues().showPassword)
  }, [])

  return (
    <form>
      <FormGroup sx={{ display: "flex",  flexDirection: "column"}}>

        <Controller
          name="email"
          control={control}
          rules={{
            required:{value: true, message: 'This field is required'},
            pattern: {value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: 'It is not email'}
          }}
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
          rules={{
            required: {value: true, message: 'This field is required'},
            minLength: {value: 6, message: 'Min number is 6'},
            maxLength: {value: 12, message: 'Max number is 12'}
          }}
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
