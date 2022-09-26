import React from 'react';
import {Box, Button, Card, Container, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="xl" sx={{
      minHeight: '100%',
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Box>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: '30px'
          }}
        >
          <Typography
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            Login
          </Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="password" variant="outlined" />
          <Button variant="contained">Login</Button>
          <Link to='/registration'>Create account</Link>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
