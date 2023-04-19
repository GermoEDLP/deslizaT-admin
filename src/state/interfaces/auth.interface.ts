import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  user: User | null;
}

export interface User {
  name: string;
  email: string;
}
