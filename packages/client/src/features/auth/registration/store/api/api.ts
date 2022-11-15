import {setUser} from "../../../baseAuth/store/reducers/authSlice";
import { NavigateFunction } from 'react-router-dom';
import {api} from "../../../../../common/store";
import {setDataToLocalStorage} from "../../../../../common/utils/localStorageUtils";
import {User} from "../../../../../common/models/userModels";

export const registrationApi = api.injectEndpoints({
  endpoints: (build) =>  ({
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
  })
})



