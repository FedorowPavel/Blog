import {Navigate, Outlet, useNavigate} from "react-router-dom";

interface ProtectedRouteProps {
  isAuth: boolean,
}

export const ProtectedRoute = (
  { isAuth}: ProtectedRouteProps
) => {
  if (!isAuth) {
    // return <Navigate to={redirectPath} replace />
    return <></>
  }

  return <Outlet/>;
};
