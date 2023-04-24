import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../initials";
import { User } from "../interfaces";
import { authLogin } from "../thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
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
        state.loading = false;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default authSlice.reducer;
