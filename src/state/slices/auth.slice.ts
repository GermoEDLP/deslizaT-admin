import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../initials";
import { User } from "../interfaces";
import { authLogin } from "../thunks";

const name = "auth";

const authSlice = createSlice({
  name,
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        const { username, name, lastname, id, email, roles } = action.payload;
        state.token = action.payload.token;
        state.user = {
          username,
          name,
          lastname,
          id,
          email,
          roles,
        };
        state.error = null;
        state.loading = false;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
