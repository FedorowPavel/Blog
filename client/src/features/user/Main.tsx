import React from 'react';
import {Avatar, Container} from "@mui/material";
import {useAppSelector} from "../../common/store/hooks";
import {BACKEND_BASE_URL} from "../../common/constants";

const Main = () => {
  const user = useAppSelector(state => state.authReducer.user)

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
