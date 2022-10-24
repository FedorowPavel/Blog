import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./features/user/Main";
import Login from "./features/auth/login/Login";
import Registration from "./features/auth/registration/Registration";
import Layout from "./common/components/wrappers/Layout";
import {useAppSelector} from "./common/store/hooks";
import {ProtectedRoute} from "./common/components/hoc/ProtectedRoute";

function App() {
  const {user} = useAppSelector(state => state.authReducer)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route element={<ProtectedRoute user={user} redirectPath='login' />}>
            <Route index element={<Main/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
