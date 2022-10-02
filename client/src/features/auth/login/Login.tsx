import React from 'react';
import {
  Button,
  Card,
  Container, FormControl,
  FormGroup, IconButton,
  InputAdornment, InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {Visibility, VisibilityOff} from "@mui/icons-material";

interface LoginForm {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login = () => {
  const {control, handleSubmit, formState: {isValid, errors}, watch, getValues, setValue} = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
      showPassword: false
    },
    mode: 'all'
    }
  );

  const onSubmit: SubmitHandler<LoginForm> = data => {
    console.log(data)
  };

  function toggleShowPassword() {
    setValue('showPassword', !getValues().showPassword)
  }

  return (
    <Container maxWidth="xl" sx={{ minHeight: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Card
        variant="outlined"
        sx={{ display: "flex", flexDirection: "column", padding: 4}}
      >
        <Typography
          variant="h4"
          color="text.primary"
          gutterBottom
          sx={{marginBottom: 3}}
        >
          Login
        </Typography>
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
                <>
                  <TextField
                    {...field}
                    autoFocus
                    id='email'
                    type='email'
                    label='email'
                    autoComplete='off'
                  />
                  <p style={{color: 'red'}}>{errors['email']?.message}</p>
                </>
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: {value: true, message: 'This field is required'},
                minLength: {value: 6, message: 'Min number is 6'},
                maxLength: {value: 12, message: 'Max number is 12'}}}
              render={({field}) => (
                <>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                      {...field}
                      id='password'
                      type={getValues().showPassword ? 'text' : 'password'}
                      label="Password"
                      autoComplete='off'
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            edge="end"
                          >
                            {getValues().showPassword ? <VisibilityOff/> : <Visibility/>}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <p style={{color: 'red'}}>{errors['password']?.message}</p>
                </>
              )}
            />
            <Button type="submit" disabled={!isValid} variant="contained" sx={{marginBottom: 3}}>Login</Button>
          </FormGroup>
        </form>
        <Link to='/registration'>Create account</Link>
        {/*<pre>*/}
        {/*  {JSON.stringify(watch(), null, 2)}*/}
        {/*</pre>*/}
        {/*<pre>*/}
        {/*  {JSON.stringify(isValid, null, 2)}*/}
        {/*</pre>*/}
        {/*<pre>*/}
        {/*  {JSON.stringify(errors, null, 2)}*/}
        {/*</pre>*/}
      </Card>
    </Container>
  );
};

export default Login;
