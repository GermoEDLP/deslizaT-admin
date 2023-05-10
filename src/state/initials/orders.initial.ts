import { FormOrderValues, OrdersState } from "../interfaces";

export const ordersInitialState: OrdersState = {
  orders: [],
  order: null,
  baseOrders: [],
  loading: false,
  error: null,
};

export const formOrderValues: FormOrderValues = {
  symptoms: "",
  diagnostic: "",
};
