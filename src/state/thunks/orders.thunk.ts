import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthLoginPayload,
  CreateOrderPayload,
  UpdateOrderPayload,
  UpdateStatusOrderPayload,
} from "../interfaces";
import { OrdersService } from "../../services/orders.service";

const ordersSvc = new OrdersService();

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const response = await ordersSvc.getOrders();
  return response;
});

export const getOrder = createAsyncThunk(
  "orders/getOrder",
  async (id: string) => {
    const response = await ordersSvc.getOrder(id);
    return response;
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (payload: CreateOrderPayload) => {
    const response = await ordersSvc.createOrder(payload);
    return response;
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async (payload: UpdateOrderPayload) => {
    const response = await ordersSvc.updateOrder(payload);
    return response;
  }
);

export const updateStatusOrder = createAsyncThunk(
  "orders/updateStatusOrder",
  async (payload: UpdateStatusOrderPayload) => {
    const response = await ordersSvc.updateOrderStatus(payload);
    return response;
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id: string) => {
    const response = await ordersSvc.deleteOrder(id);
    return response;
  }
);
