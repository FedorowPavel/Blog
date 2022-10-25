import React, {FC, useCallback, useEffect} from 'react';
import {
  Button,
  FormGroup,
  TextField, useTheme
} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import FormFieldWrapper from "../../../../common/components/wrappers/FormFieldWrapper";
import PasswordVisibilityIcon from "./PasswordVisibilityIcon";
import {CredentialsFormData, RegistrationFormFieldsEnum} from "../../registration/models/types";
import {authApi} from "../../registration/store/authApi/AuthApi";
import 'react-toastify/dist/ReactToastify.css';
import {useToast} from "../../../../common/hooks/useToast";
import {GridLoader} from "react-spinners";
import {QueryFixedCacheKeysENUM} from "../../../../common/constants";


const LoginForm: FC = () => {
  const theme = useTheme()
  const {control, handleSubmit, formState: {isValid, errors}, getValues, setValue, watch} = useForm<CredentialsFormData>({
      defaultValues: {
        email: '',
        password: '',
        showPassword: false
      },
      mode: 'all'
    }
  );
  const [loginUser, {data: user, error}] = authApi.useLoginUserMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.LOGIN_USER,
  })
  useToast(error, user)

  const onSubmit: SubmitHandler<CredentialsFormData> = loginData => {
    loginUser(loginData)
  };

  const toggleShowPassword = useCallback(() => {
    setValue('showPassword', !getValues().showPassword)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

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
                error={!!errors[RegistrationFormFieldsEnum.EMAIL]}
                helperText={errors[RegistrationFormFieldsEnum.EMAIL]?.message}
                autoFocus
                id='email'
                type='email'
                label='email'
                autoComplete='off'/>
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
                error={!!errors[RegistrationFormFieldsEnum.PASSWORD]}
                helperText={errors[RegistrationFormFieldsEnum.PASSWORD]?.message}
                InputProps={{
                  endAdornment: <PasswordVisibilityIcon watch={watch} toggleShowPassword={toggleShowPassword}/>
                }}
              />
            </FormFieldWrapper>
          )}
        />
        <Button type="submit" disabled={!isValid} variant="contained" sx={{marginBottom: 3}}>Login</Button>
      </FormGroup>
    </form>
  );
}

export default LoginForm;