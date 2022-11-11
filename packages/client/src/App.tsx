import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "./common/components/wrappers/Layout";
import {AuthGuard} from "./common/components/hoc/AuthGuard";
import NotFoundPage from "./common/components/NotFoundPage";
import Registration from "./features/auth/registration";
import Login from "./features/auth/login";
import Feed from "./features/feed";
import SinglePost from "./features/posts/components/SinglePost";
import Posts from "./features/posts/components/Posts";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='*' element={<NotFoundPage/>}/>

        <Route element={<AuthGuard/>}>
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
