import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";


const Feed: FC = () => {
  return (
    <Container maxWidth="md" sx={{marginTop: '20px'}}>
      <Outlet/>
    </Container>
  );
};

export default Feed;
