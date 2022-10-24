import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./features/user/Main";
import Login from "./features/auth/login/Login";
import Registration from "./features/auth/registration/Registration";
import Layout from "./common/components/wrappers/Layout";
import {useAppSelector} from "./common/store/hooks";

function App() {
  const {user} = useAppSelector(state => state.authReducer)

  if(!user){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
