import React from 'react';
import {useTheme} from "@mui/styles";
import {BlogTheme} from "@mui/material/styles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./features/user/Main";
import Login from "./features/auth/login/Login";
import Registration from "./features/auth/registration/Registration";
import Layout from "./common/components/wrappers/Layout";

function App() {
  const theme = useTheme<BlogTheme>()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
