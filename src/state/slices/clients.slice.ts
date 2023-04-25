import { createSlice } from "@reduxjs/toolkit";
import { clientsInitialState } from "../initials";
import { getClient, getClients } from "../thunks";
import { IconMail, IconMapPin, IconPhone, IconUser } from "@tabler/icons-react";
import { ContactType } from "../interfaces";

const clientsSlice = createSlice({
  name: "clients",
  initialState: clientsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClients.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClients.fulfilled, (state, action) => {
        const { data, page, perPage, total } = action.payload;
        state.clients = data;
        state.pagination = { page, total, perPage };
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
      });
  },
});

export default clientsSlice.reducer;
