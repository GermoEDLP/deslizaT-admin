import { AuthState } from "../interfaces";

export const authInitialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};
