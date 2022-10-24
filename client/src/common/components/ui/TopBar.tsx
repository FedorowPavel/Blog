import React, {useEffect, useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import {useAppSelector} from "../../store/hooks";
import {BACKEND_BASE_URL} from "../../constants";
import {logout} from "../../store/reducers/AuthSlice";
import {authApi} from "../../store/authApi/AuthApi";

const notAuthButtons = ['Login', 'Registration'];
const authButtons = ['Logout'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TopBar = () => {
  const {user} = useAppSelector(state => state.authReducer)
  const navigate = useNavigate()
  const [logout] = authApi.useLogoutMutation()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [buttons, setButtons] = useState<string[]>(notAuthButtons)

  useEffect(() => {
    if(!user) {
      setButtons(notAuthButtons)
    } else {
      setButtons(authButtons)
    }
  }, [user])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (route = '') => {
    if(route === 'logout') {
      logout(null)
      // deleteCookie('token')
      // dispatch(logout())
      return
    }
    if(route) {
      handleNavigate(route)
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (route: string) => {
    navigate(route)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Blog
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {buttons.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page.toLowerCase())}
                  sx={{my: 2, color: 'white', display: 'block'}}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Blog
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {buttons.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page.toLowerCase())}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          {user
            ? <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0, marginRight: '20px'}}>
                  <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'absolute', color: 'lightgray'}}>
                    <Avatar alt="Remy Sharp" src={`${BACKEND_BASE_URL}${user?.image}`}/>
                    <Box sx={{position: 'relative', top: 0, left: 0, fontSize: '10px'}}>{user.nickname}</Box>
                  </Box>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          : null}

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
