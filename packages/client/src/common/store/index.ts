import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from '../../features/auth/baseAuth/store/reducers/authSlice'
import {createApi} from '@reduxjs/toolkit/query/react'
import { baseQueryWithInterceptor } from "./baseQueryWithInterceptor";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({}).concat(api.middleware)
    }
  })
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['Posts','PagePosts', 'SinglePost', 'Comments'],
  endpoints: () => ({}),
})

const rootReducer = combineReducers({
  authReducer,
  [api.reducerPath]: api.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
