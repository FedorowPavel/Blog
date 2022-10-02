import React, {FC} from 'react';
import {
  Button,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {LoginFormData} from "./types";
import FormFieldWrapper from "../../../common/components/wrappers/FormFieldWrapper";


const LoginForm: FC = () => {
  const {control, handleSubmit, formState: {isValid, errors}, getValues, setValue, watch} = useForm<LoginFormData>({
      defaultValues: {
        email: '',
        password: '',
        showPassword: false
      },
      mode: 'all'
    }
  );

  const onSubmit: SubmitHandler<LoginFormData> = data => {
    console.log(data)
  };

  function toggleShowPassword() {
    setValue('showPassword', !getValues().showPassword)
  }

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
                error={!!errors['email']}
                autoFocus
                id='email'
                type='email'
                label='email'
                autoComplete='off'
                helperText={errors['email']?.message}
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
                error={!!errors['password']}
                helperText={errors['password']?.message}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {watch().showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                }}
              />
            </FormFieldWrapper>
          )}
        />
        <Button type="submit" disabled={!isValid} variant="contained" sx={{marginBottom: 3}}>Login</Button>
      </FormGroup>
      {/*<pre>*/}
      {/*  {JSON.stringify(watch(), null, 2)}*/}
      {/*</pre>*/}
      {/*<pre>*/}
      {/*  {JSON.stringify(isValid, null, 2)}*/}
      {/*</pre>*/}
      {/*<pre>*/}
      {/*  {JSON.stringify(errors, null, 2)}*/}
      {/*</pre>*/}
    </form>
  );
}

export default LoginForm;
