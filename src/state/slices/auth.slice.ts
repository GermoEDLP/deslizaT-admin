import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../initials";
import { User } from "../interfaces";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
