import * as React from 'react';
import {Outlet} from "react-router-dom";
import TopBar from "../ui/TopBar";
import {Container} from "@mui/material";
import {useTheme} from "@mui/styles";
import {BlogTheme} from "@mui/material/styles";


const Layout = () => {
  const theme = useTheme<BlogTheme>()

  return (
    <>
      <TopBar/>
      <Container sx={{
        height: '100vh',
        backgroundColor: theme.palette.grey["300"]
      }}>
        <Outlet/>
      </Container>
    </>

  );
};
export default Layout;
