import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from '../../features/auth/registration/store/reducers/AuthSlice'
import {authApi} from "../../features/auth/registration/store/authApi/AuthApi";

const rootReducer = combineReducers({
  authReducer,
  [authApi.reducerPath]: authApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({}).concat([authApi.middleware])
    }
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
