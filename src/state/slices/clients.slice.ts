import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientsInitialState } from "../initials";
import {
  createBike,
  createClient,
  deleteClient,
  getClient,
  getClients,
  updateBike,
  updateClient,
} from "../thunks";
import { IconMail, IconMapPin, IconPhone, IconUser } from "@tabler/icons-react";
import { Bike, Client } from "../interfaces";

const clientsSlice = createSlice({
  name: "clients",
  initialState: clientsInitialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.loading = true;
      const s = action.payload.toLowerCase();
      state.clients = state.baseClients.filter((c: Client) => {
        return (
          c.name.toLowerCase().includes(s) ||
          c.lastname.toLowerCase().includes(s) ||
          c.address?.street.toLowerCase().includes(s) ||
          c.email.toLowerCase().includes(s) ||
          c.phone?.toLowerCase().includes(s)
        );
      });
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClients.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.clients = action.payload;
        state.baseClients = action.payload;
        state.loading = false;
      })
      .addCase(getClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClient.fulfilled, (state, action) => {
        state.client = action.payload;
        state.clientInfo = setClientInfo(action.payload);
        state.loading = false;
      })
      .addCase(getClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(createClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.clients.push(action.payload);
        state.loading = false;
      })
      .addCase(createClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(updateClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.client = action.payload;
        state.clientInfo = setClientInfo(action.payload);
        state.loading = false;
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(deleteClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.client = null;
        state.clientInfo = null;
        state.loading = false;
      })
      .addCase(deleteClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // BIKES
      .addCase(createBike.fulfilled, (state, action) => {
        if (state.client) {
          state.client = {
            ...state.client,
            bikes: [...(state.client?.bikes || []), action.payload],
          };
        }
        state.loading = false;
      })
      .addCase(updateBike.fulfilled, (state, action) => {
        if (state.client) {
          state.client = {
            ...state.client,
            bikes: (state.client?.bikes || []).map((b: Bike) =>
              b._id === action.payload._id ? action.payload : b
            ),
          };
        }
        state.loading = false;
      });
  },
});

export const setClientInfo = (client: Client) => {
  const { address, lastname, name, phone, email } = client;
  const { street, number, city, apartment, floor } = address || {};
  return [
    {
      title: "Nombre y Apellido",
      desc: `${name} ${lastname}`,
      icon: IconUser,
    },
    {
      title: "Dirección",
      desc: `${street || ""} ${number ? `#${number}` : ""}, ${city || ""} ${
        floor ? `Piso ${floor}` : ""
      } ${apartment ? `Dpto. ${apartment}` : ""} `,
      icon: IconMapPin,
    },
    {
      title: "Teléfono",
      desc: phone || "",
      icon: IconPhone,
    },
    {
      title: "Email",
      desc: email || "",
      icon: IconMail,
    },
  ];
};

export const { search } = clientsSlice.actions;

export default clientsSlice.reducer;
