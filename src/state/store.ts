import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth.slice";
import clientsSlice from "./slices/clients.slice";
import modalSlice from "./slices/modal.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    clients: clientsSlice,
    modal: modalSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
