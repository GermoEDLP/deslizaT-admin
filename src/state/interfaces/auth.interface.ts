import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Role {
  ADMIN = "admin",
  UPDATER = "updater",
  READER = "reader",
  CREATOR = "creator",
}

export interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
}
export interface User {
  name: string;
  email: string;
  lastname: string;
  username: string;
  id: string;
  roles: Role[];
}
export interface AuthLoginPayload {
  username: string;
  password: string;
}
export interface AuthLoginResponse {
  token: string;
  id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  roles: any[];
  expendend: number;
  expriresIn: string;
  expire: number;
}
