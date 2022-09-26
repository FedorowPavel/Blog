import * as React from 'react';
import {Outlet} from "react-router-dom";
import TopBar from "./TopBar";
import {Container} from "@mui/material";


const Layout = () => {
  return (
    <>
      <TopBar/>
      <Container sx={{
        height: '100vh',
      }}>
        <Outlet/>
      </Container>
    </>

  );
};
export default Layout;
