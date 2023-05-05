import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientsInitialState } from "../initials";
import { createClient, getClient, getClients } from "../thunks";
import { IconMail, IconMapPin, IconPhone, IconUser } from "@tabler/icons-react";
import { Client, ContactType } from "../interfaces";

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
          c.address.street.toLowerCase().includes(s) ||
          c.contacts.find((c) => c.value.toLowerCase().includes(s))
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
        state.clientInfo = [
          {
            title: "Nombre y Apellido",
            desc: `${action.payload.name} ${action.payload.lastname}`,
            icon: IconUser,
          },
          {
            title: "Dirección",
            desc: `${action.payload.address.street} ${
              action.payload.address.number
            }, ${action.payload.address.city || ""}`,
            icon: IconMapPin,
          },
          {
            title: "Teléfono",
            desc:
              action.payload.contacts.find((c) => c.type === ContactType.PHONE)
                ?.value || "",
            icon: IconPhone,
          },
          {
            title: "Email",
            desc:
              action.payload.contacts.find((c) => c.type === ContactType.EMAIL)
                ?.value || "",
            icon: IconMail,
          },
        ];
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
      });
  },
});

export const { search } = clientsSlice.actions;

export default clientsSlice.reducer;
