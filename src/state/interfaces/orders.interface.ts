import { Article } from "./articles.interface";
import { Bike } from "./bikes.interface";
import { Client } from "./clients.interface";

export interface Order {
  _id: string;
  symptoms: string;
  diagnostic: string;
  taskDescription: string;
  finalDetails: string;
  departureDate: Date;
  createdAt: Date;
  status: Status;
  status_history: Status[];
  articles: Article[];
  bike: Bike;
  user: Client;
}

export enum STATUS_VALUE {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING = "WAITING",
  SUSPEND = "SUSPEND",
  DONE = "DONE",
  CLOSE = "CLOSE",
  DELETED = "DELETED",
}

export const STATUS_COLOR: Record<STATUS_VALUE, string> = {
  [STATUS_VALUE.NEW]: "blue",
  [STATUS_VALUE.IN_PROGRESS]: "grape",
  [STATUS_VALUE.WAITING]: "orange",
  [STATUS_VALUE.SUSPEND]: "red",
  [STATUS_VALUE.DONE]: "lime",
  [STATUS_VALUE.CLOSE]: "gray",
  [STATUS_VALUE.DELETED]: "red",
}

export const STATUS_LABEL: Record<STATUS_VALUE, string> = {
  [STATUS_VALUE.NEW]: "Nuevo",
  [STATUS_VALUE.IN_PROGRESS]: "En progreso",
  [STATUS_VALUE.WAITING]: "En espera",
  [STATUS_VALUE.SUSPEND]: "Suspendido",
  [STATUS_VALUE.DONE]: "Terminado",
  [STATUS_VALUE.CLOSE]: "Cerrado",
  [STATUS_VALUE.DELETED]: "Eliminado",
};

export interface Status {
  value: STATUS_VALUE;
  label: string;
  setedAt: Date;
  error: string;
  info: string;
}

export interface OrdersState {
  orders: Order[];
  baseOrders: Order[];
  order: Order | null;
  loading: boolean;
  error: string | null;
}

export interface CreateOrderPayload {
  symptoms: string;
  diagnostic?: string;
  taskDescription?: string;
  bike: string;
  user: string;
}

export type UpdateOrderPayload = Partial<Omit<Order, "createdAt">>;

export interface UpdateStatusOrderPayload {
  value: STATUS_VALUE;
  info?: string;
  id: string;
}

export interface FormOrderValues {
  symptoms: string;
  diagnostic: string;
  taskDescription?: string;
  finalDetails?: string;
  articles?: Article[];
}
