import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "./types";
import {CredentialsFormData} from "../../../features/auth/registration/types";
import {setUser} from "../reducers/AuthSlice";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/auth/",
    credentials: 'include',
  }),
  endpoints: (build) =>  ({
    loginUser: build.mutation<{ token: string, user: User }, CredentialsFormData>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
        }
      },
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (error) {
          throw new Error('login error')
        }
      },
    }),
    loginUserWithCookies: build.mutation<User, null>({
      query() {
        return {
          url: 'loginWithCookies',
          method: 'POST',
        }
      },
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          throw new Error('login with cookies error')
        }
      },
    }),
    registerUser: build.mutation<{ user: User }, FormData>({
      query(data) {
        return {
          url: 'registration',
          method: 'POST',
          body: data,
        }
      },
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (error) {
          throw new Error('registration error')
        }
      },
    }),
    logout: build.mutation<{ user: User }, null>({
      query() {
        return {
          url: 'logout',
          method: 'POST',
        }
      },
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (error) {
          throw new Error('logout error')
        }
      },
    })
  })
})



