import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../authApi/types";

interface AuthState {
  user: User | null,
  token: string | null
}

const initState: AuthState = {
  user: null,
  token: null
}

export const authSlice = createSlice({
  name: 'Auth',
  initialState: initState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  }
})

export default authSlice.reducer;
export const {logout, setUser, setToken} = authSlice.actions
