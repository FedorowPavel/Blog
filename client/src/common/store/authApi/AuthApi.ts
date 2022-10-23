import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "./types";
import {CredentialsFormData, RegistrationData} from "../../../features/auth/registration/types";
import {setToken, setUser} from "../reducers/AuthSlice";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/auth/",
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
          dispatch(setToken(data.token));
        } catch (error) {
          throw new Error('login error')
        }
      },
    }),
    registerUser: build.mutation<{ token: string, user: User }, FormData>({
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
          dispatch(setToken(data.token));
        } catch (error) {
          throw new Error('registration error')
        }
      },
    })
  })
})



