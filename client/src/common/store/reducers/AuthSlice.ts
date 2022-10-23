import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../authApi/types";

interface AuthState {
  user: User | null,
}

const initState: AuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'Auth',
  initialState: initState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  }
})

export default authSlice.reducer;
export const {logout, setUser} = authSlice.actions
