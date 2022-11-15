import {api} from "../../../../../common/store";
import { NavigateFunction } from "react-router-dom";
import {logout, setUser} from "../reducers/authSlice";
import {removeDataFromLocalStorage, setDataToLocalStorage} from "../../../../../common/utils/localStorageUtils";
import {CredentialsFormData} from "../../models/types";
import {User} from "../../../../../common/models/userModels";

export const baseAuthApi = api.injectEndpoints({
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



