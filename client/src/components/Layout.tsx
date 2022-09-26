import * as React from 'react';
import {Outlet} from "react-router-dom";
import TopBar from "./TopBar";


const Layout = () => {
  return (
    <>
      <TopBar/>
      <Outlet/>
    </>
  );
};
export default Layout;
