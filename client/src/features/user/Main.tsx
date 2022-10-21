import React from 'react';
import {Container} from "@mui/material";
import {logout} from "../../common/store/reducers/AuthSlice";
import {useAppDispatch} from "../../common/store/hooks";
import {useNavigate} from "react-router-dom";


const Main = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const handler = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <Container maxWidth="xl">
      <button onClick={handler}>logout</button>
      Main page
    </Container>
  );
};

export default Main;
