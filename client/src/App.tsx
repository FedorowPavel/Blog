import React from 'react';
import {useTheme} from "@mui/styles";
import {BlogTheme} from "@mui/material/styles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Layout from "./components/Layout";

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
