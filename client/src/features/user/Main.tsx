import React from 'react';
import {Avatar, Container} from "@mui/material";
import {logout} from "../../common/store/reducers/AuthSlice";
import {useAppDispatch, useAppSelector} from "../../common/store/hooks";
import {useNavigate} from "react-router-dom";
import {BACKEND_BASE_URL} from "../../common/constants";

const Main = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const user = useAppSelector(state => state.authReducer.user)

  const handler = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <Container maxWidth="md">
      <pre>{user ? JSON.stringify(user, null, 2) : 'no user'}</pre>
      {
        user && <Avatar sx={{ width: 200, height: 200 }} src={`${BACKEND_BASE_URL}${user?.image}`}/>
      }
      Main page
    </Container>
  );
};

export default Main;
