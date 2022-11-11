import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {logout} from "../../features/auth/registration/store/reducers/AuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/',
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
