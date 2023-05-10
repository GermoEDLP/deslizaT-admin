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
      // BIKE
      .addCase(createBike.fulfilled, (state) => {
        state.notification = showNotification(
          "Bicicleta creada correctamente",
          NotificationsColor.SUCCESS
        ) as any;
      })
      .addCase(createBike.rejected, (state, action) => {
        state.notification = showNotification(
          "Hubo un error al crear la bicicleta: " + action.error.message,
          NotificationsColor.ERROR
        ) as any;
      })
      .addCase(updateBike.fulfilled, (state) => {
        state.notification = showNotification(
          "Bicicleta actualizada correctamente",
          NotificationsColor.SUCCESS
        ) as any;
      })
      .addCase(updateBike.rejected, (state, action) => {
        state.notification = showNotification(
          "Hubo un error al actualizar la bicicleta: " + action.error.message,
          NotificationsColor.ERROR
        ) as any;
      })
      // CLIENT
      .addCase(createClient.fulfilled, (state, action) => {
        state.notification = showNotification(
          "Cliente creado correctamente",
          NotificationsColor.SUCCESS
        ) as any;
      })
      .addCase(createClient.rejected, (state, action) => {
        state.notification = showNotification(
          "Hubo un error al crear el cliente: " + action.error.message,
          NotificationsColor.SUCCESS
        ) as any;
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.notification = showNotification(
          "Cliente editado correctamente",
          NotificationsColor.SUCCESS
        ) as any;
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.notification = showNotification(
          "Hubo un error al editar el cliente: " + action.error.message,
          NotificationsColor.SUCCESS
        ) as any;
      });
  },
});

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
    console.log(d);

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
