import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth.slice";
import clientsSlice from "./slices/clients.slice";
import modalSlice from "./slices/modal.slice";
import bikesSlice from "./slices/bikes.slice";
import notificationsSlice from "./slices/notifications.slice";
import ordersSlice from "./slices/orders.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    clients: clientsSlice,
    modal: modalSlice,
    bikes: bikesSlice,
    notifications: notificationsSlice,
    orders: ordersSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
