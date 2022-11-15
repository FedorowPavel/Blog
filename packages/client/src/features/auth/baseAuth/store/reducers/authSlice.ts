import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDataFromLocalStorage} from "../../../../../common/utils/localStorageUtils";
import {User} from "../../../../../common/models/userModels";

interface AuthState {
  user: User | null,
}

const initState: AuthState = {
  user: getDataFromLocalStorage('user') || null,
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
