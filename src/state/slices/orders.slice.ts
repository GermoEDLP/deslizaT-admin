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
import { isFulfilledAction, isPendingAction, isRejectedAction } from ".";

const name = "orders";

const ordersSlice = createSlice({
  name,
  initialState: ordersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.fulfilled, (state, action) => {
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
      .addMatcher(
        (action) => isPendingAction(action, name),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => isFulfilledAction(action, name),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => isRejectedAction(action, name),
        (state, action) => {
          state.error = action.error.message || "Something went wrong";
          state.loading = false;
        }
      );
  },
});

export default ordersSlice.reducer;
