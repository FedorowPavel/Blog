import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";

export const AuthGuard = () => {
  const {user} = useAppSelector(state => state.authReducer)

  if (!user) {
    return <Navigate to={'login'} replace />
  }

  return <Outlet/>;
};
