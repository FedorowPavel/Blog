import * as React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import TopBar from "../ui/TopBar";
import {Box} from "@mui/material";
import {useTheme} from "@mui/styles";
import {BlogTheme} from "@mui/material/styles";
import {useEffect} from "react";
import {useAppSelector} from "../../store/hooks";


const Layout = () => {
  const theme = useTheme<BlogTheme>()
  const navigate = useNavigate();
  const {user} = useAppSelector(state => state.authReducer)

  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [])

  return (
    <Box
      sx={{
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }}>
      <TopBar/>
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
