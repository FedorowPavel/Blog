import {User} from "../../store/authApi/types";
import {Outlet, useNavigate} from "react-router-dom";

interface ProtectedRouteProps {
  user: User | null,
  redirectPath: string,
}

export const ProtectedRoute = (
  { user, redirectPath}: ProtectedRouteProps
) => {
  const navigate = useNavigate()
  if (!user) {
    navigate(redirectPath, {replace: true})
    return <></>
  }

  return <Outlet/>;
};
