import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {logout} from "../../features/auth/baseAuth/store/reducers/authSlice";

export const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_BASE_URL,
  credentials: 'include',
})

export const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const res = await baseQuery(args, api, extraOptions);

  if(res.error && res.error.status === 401) {
    api.dispatch(logout())
  }

  return res;
}
