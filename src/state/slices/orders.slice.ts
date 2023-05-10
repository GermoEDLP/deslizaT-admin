import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { ordersInitialState } from "../initials";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
  updateStatusOrder,
} from "../thunks";

const ordersSlice = createSlice({
  name: "orders",
  initialState: ordersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.fulfilled, (state, action) => {
        console.log("getOrders.fulfilled", action.payload);

        state.orders = action.payload;
        state.baseOrders = action.payload;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        state.baseOrders.push(action.payload);
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        const newOrders = state.orders.map((order) => {
          if (order._id === action.payload._id) {
            return action.payload;
          }
          return order;
        });
        state.orders = newOrders;
        state.baseOrders = newOrders;
      })
      .addCase(updateStatusOrder.fulfilled, (state, action) => {
        const newOrders = state.orders.map((order) => {
          if (order._id === action.payload._id) {
            return action.payload;
          }
          return order;
        });
        state.orders = newOrders;
        state.baseOrders = newOrders;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        const newOrders = state.orders.map((order) => {
          if (order._id === action.payload._id) {
            return action.payload;
          }
          return order;
        });
        state.orders = newOrders;
        state.baseOrders = newOrders;
      })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.loading = false;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
      });
  },
});

const isPendingAction = (action: AnyAction) => {
  return action.type.endsWith("/pending") && action.type.includes("orders/");
};
const isRejectedAction = (action: AnyAction) =>
  action.type.endsWith("/rejected") && action.type.includes("orders/");

const isFulfilledAction = (action: AnyAction) =>
  action.type.endsWith("/fulfilled") && action.type.includes("orders/");

export default ordersSlice.reducer;
