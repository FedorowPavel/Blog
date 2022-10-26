import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Layout from "./common/components/wrappers/Layout";
import {useAppSelector} from "./common/store/hooks";
import {ProtectedRoute} from "./common/components/hoc/ProtectedRoute";
import Error from "./common/components/Error";
import {authApi} from "./features/auth/registration/store/authApi/AuthApi";
import Registration from "./features/auth/registration";
import Login from "./features/auth/login";
import {QueryFixedCacheKeysENUM} from "./common/constants";
import Feed from "./features/feed";
import SinglePost from "./features/posts/components/SinglePost";
import Posts from "./features/posts/components/Posts";

function App() {
  const {user} = useAppSelector(state => state.authReducer)
  const [loginUserWithCookies] = authApi.useLoginUserWithCookiesMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.LOGIN_WITH_COOKIES,
  })
  const navigate = useNavigate()
  const location = useLocation()
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    loginUserWithCookies(null)
  }, [])

  useEffect(() => {
    navigate(location.pathname) //initial redirection
  }, [])

  useEffect(() => {
    if(user) {
      navigate(['/login', '/registration'].includes(location.pathname) ? '/feed' : location.pathname) //redirection after login
      setIsAuth(true)
    }
  }, [user])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='*' element={<Error/>}/>

        <Route element={<ProtectedRoute isAuth={isAuth}/>}>
          <Route path='/feed' element={<Feed/>}>
            <Route index element={<Posts/>}/>
            <Route path=':id' element={<SinglePost/>}/>
          </Route>
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Route>
    </Routes>
  );
}

export default App;
