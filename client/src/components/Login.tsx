import React from 'react';
import {Box, Card, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="xl" sx={{
      minHeight: '100%',
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Box sx={{
        minWidth: 275
      }}>
        <Card
          variant="outlined"
          sx={{
            padding: '20px'
          }}
        >
          <Typography
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            Login
          </Typography>
          <Link to='/registration'>Create account</Link>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
