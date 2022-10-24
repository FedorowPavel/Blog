import React, {useEffect, useLayoutEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Main from "./features/user/Main";
import Login from "./features/auth/login/Login";
import Registration from "./features/auth/registration/Registration";
import Layout from "./common/components/wrappers/Layout";
import {useAppSelector} from "./common/store/hooks";
import {ProtectedRoute} from "./common/components/hoc/ProtectedRoute";
import Error from "./common/components/Error";
import {authApi} from "./common/store/authApi/AuthApi";

function App() {
  const {user} = useAppSelector(state => state.authReducer)
  const [loginUserWithCookies] = authApi.useLoginUserWithCookiesMutation()
  const navigate = useNavigate()
  const location = useLocation()


  useLayoutEffect(() => {
    console.log('[useLayoutEffect]', user)
    if(!user) {
      loginUserWithCookies(null)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      console.log('[useEffect]', user)
    })
  }, [user])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/main' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  );
}

export default App;
