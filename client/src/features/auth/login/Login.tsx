import React from 'react';
import {
  Box,
  Card,
  Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';
import Title from "../../../common/components/ui/Title";

const Login = () => {
    return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      right: '50%',
      transform: 'translate(50%, -50%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Card
        variant="outlined"
        sx={{ display: "flex", flexDirection: "column", padding: 4}}
      >
        <Title title={'Login'} variant='h4'/>
        <LoginForm/>
        <Link to='/registration'>Create account</Link>
      </Card>
    </Box>
  );
};

export default Login;
