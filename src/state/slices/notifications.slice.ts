import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notificationsInitialState } from "../initials/notifications.initial";
import { NotificationProps } from "@mantine/notifications";
import {
  autoClose,
  defaultNotificationsProps,
  NotificationsColor,
  NotificationsShowPayload,
} from "../interfaces";
import { createBike, createClient, updateBike, updateClient } from "../thunks";
import {
  triggerRejectNotification,
  triggerSuccessNotification,
} from "./helpers.slice";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: notificationsInitialState,
  reducers: {
    show: (state, action: PayloadAction<NotificationsShowPayload>) => {
      state.notification = action.payload;
    },
    showInfo: (
      state,
      action: PayloadAction<NotificationsShowPayload | string>
    ) => {
      state.notification = showNotification(
        action.payload,
        NotificationsColor.INFO
      ) as any;
    },
    showWarning: (
      state,
      action: PayloadAction<NotificationsShowPayload | string>
    ) => {
      state.notification = showNotification(
        action.payload,
        NotificationsColor.WARNING
      ) as any;
    },
    showError: (
      state,
      action: PayloadAction<NotificationsShowPayload | string>
    ) => {
      state.notification = showNotification(
        action.payload,
        NotificationsColor.ERROR
      ) as any;
    },
    showSuccess: (
      state,
      action: PayloadAction<NotificationsShowPayload | string>
    ) => {
      state.notification = showNotification(
        action.payload,
        NotificationsColor.SUCCESS
      ) as any;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClient.fulfilled, (state, action) => {
        console.log(action.meta);

        state.loading = false;
      })
      .addMatcher(triggerSuccessNotification, (state, action) => {
        const type = action.type.split("/");
        const name = type[0] as Name;
        const thunk = type[1] as Thunk;
        state.notification = showNotification(
          NamesExtraType?.[name]?.[thunk]?.success || "Exito",
          NotificationsColor.SUCCESS
        ) as any;
      })
      .addMatcher(triggerRejectNotification, (state, action) => {
        const type = action.type.split("/");
        const name = type[0] as Name;
        const thunk = type[1] as Thunk;
        state.notification = showNotification(
          NamesExtraType?.[name]?.[thunk]?.error || "Error",
          NotificationsColor.ERROR
        ) as any;
      });
  },
});

export enum Name {
  orders = "orders",
  clients = "clients",
  bikes = "bikes",
  // auth = "auth",
}

export enum Thunk {
  createOrder = "createOrder",
  updateOrder = "updateOrder",
  deleteOrder = "deleteOrder",
  updateStatusOrder = "updateStatusOrder",
  createClient = "createClient",
  updateClient = "updateClient",
  deleteClient = "deleteClient",
  createBike = "createBike",
  updateBike = "updateBike",
  deleteBike = "deleteBike",
}

export interface ExtraType {
  success: string;
  error: string;
}

export const NamesExtraType: Record<Name, Partial<Record<Thunk, ExtraType>>> = {
  [Name.orders]: {
    [Thunk.createOrder]: {
      success: "Orden creada correctamente",
      error: "Error al crear la orden",
    },
    [Thunk.updateOrder]: {
      success: "Orden actualizada correctamente",
      error: "Error al actualizar la orden",
    },
    [Thunk.deleteOrder]: {
      success: "Orden eliminada correctamente",
      error: "Error al eliminar la orden",
    },
    [Thunk.updateStatusOrder]: {
      success: "Estado de la orden actualizado correctamente",
      error: "Error al actualizar el estado de la orden",
    },
  },
  [Name.clients]: {
    [Thunk.createClient]: {
      success: "Cliente creado correctamente",
      error: "Error al crear el cliente",
    },
    [Thunk.updateClient]: {
      success: "Cliente actualizado correctamente",
      error: "Error al actualizar el cliente",
    },
    [Thunk.deleteClient]: {
      success: "Cliente eliminado correctamente",
      error: "Error al eliminar el cliente",
    },
  },
  [Name.bikes]: {
    [Thunk.createBike]: {
      success: "Bicicleta creada correctamente",
      error: "Error al crear la bicicleta",
    },
    [Thunk.updateBike]: {
      success: "Bicicleta actualizada correctamente",
      error: "Error al actualizar la bicicleta",
    },
    [Thunk.deleteBike]: {
      success: "Bicicleta eliminada correctamente",
      error: "Error al eliminar la bicicleta",
    },
  },
};

export const showNotification = (
  payload: string | NotificationsShowPayload,
  color: NotificationsColor
) => {
  if (typeof payload === "string") {
    const d = {
      message: payload,
      ...defaultNotificationsProps,
      color,
    };
    return d;
  }
  return {
    ...defaultNotificationsProps,
    ...payload,
    color,
  };
};

export const { show, showError, showInfo, showSuccess, showWarning } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
