import * as React from 'react';
import {Outlet} from "react-router-dom";
import BlogTopBar from "../ui/BlogTopBar";
import {Box} from "@mui/material";
import {useTheme} from "@mui/styles";
import {BlogTheme} from "@mui/material/styles";


const Layout = () => {
  const theme = useTheme<BlogTheme>()

  return (
    <Box
      sx={{
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }}>
      <BlogTopBar/>
      <Box sx={{
        backgroundColor: theme.palette.grey["300"],
        flexGrow: 1,
        position: 'relative'
      }}>
        <Outlet/>
      </Box>
    </Box>

  );
};
export default Layout;
