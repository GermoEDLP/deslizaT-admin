import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/AuthService";
import { AuthLoginPayload } from "../interfaces";

const authSvc = new AuthService();

export const authLogin = createAsyncThunk(
  'auth/login',
  async (payload: AuthLoginPayload) => {
    const response = await authSvc.login(payload);
    return response;
  }
);