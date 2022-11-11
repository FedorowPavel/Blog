import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "./types";
import {CredentialsFormData} from "../../models/types";
import {logout, setUser} from "../reducers/AuthSlice";
import { NavigateFunction } from 'react-router-dom';
import {removeDataFromLocalStorage, setDataToLocalStorage} from "../../../../../common/utils/utils";
import {api} from "../../../../../common/store";

export const authApi = api.injectEndpoints({
  endpoints: (build) =>  ({
    loginUser: build.mutation<{ token: string, user: User }, {loginData: CredentialsFormData, navigate: NavigateFunction}>({
      query({loginData}) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: loginData,
        }
      },
      async onQueryStarted({navigate}, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data.user));
          setDataToLocalStorage(data.user, 'user')
          navigate('/feed')
        } catch (error) {
          throw new Error('login error')
        }
      },
    }),
    registerUser: build.mutation<{ user: User }, { registrationData: FormData, navigate: NavigateFunction}>({
      query({registrationData}) {
        return {
          url: 'auth/registration',
          method: 'POST',
          body: registrationData,
        }
      },
      async onQueryStarted({navigate}, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data.user));
          setDataToLocalStorage(data.user, 'user')
          navigate('/feed')
        } catch (error) {
          throw new Error('registration error')
        }
      },
    }),
    logout: build.mutation<{ user: User }, null>({
      query() {
        return {
          url: 'auth/logout',
          method: 'POST',
        }
      },
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          removeDataFromLocalStorage('user')
          dispatch(logout());
        } catch (error) {
          throw new Error('logout error')
        }
      },
    })
  })
})



