import React, {FC, useCallback, useEffect} from 'react';
import {
  Button,
  FormGroup,
  TextField
} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import FormFieldWrapper from "../../../common/components/wrappers/FormFieldWrapper";
import PasswordVisibilityIcon from "./PasswordVisibilityIcon";
import {CredentialsFormData, RegistrationFormFieldsEnum} from "../registration/types";
import {authApi} from "../../../common/store/authApi/AuthApi";
import {useNavigate} from "react-router-dom";


const LoginForm: FC = () => {
  const {control, handleSubmit, formState: {isValid, errors}, getValues, setValue, watch} = useForm<CredentialsFormData>({
      defaultValues: {
        email: '',
        password: '',
        showPassword: false
      },
      mode: 'all'
    }
  );
  const [loginUser, {data: user}] = authApi.useLoginUserMutation()
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CredentialsFormData> = loginData => {
    loginUser(loginData)
    navigate('/main')
  };

  // useEffect(() => {
  //   if(user) {
  //     navigate('/')
  //   }
  // }, [user])

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
