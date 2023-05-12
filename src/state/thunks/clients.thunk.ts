import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthLoginPayload, Client, CreateClientPayload } from "../interfaces";
import { ClientsService } from "../../services/clients.service";

const clientsSvc = new ClientsService();

export const getClients = createAsyncThunk("clients/getClients", async () => {
  const response = await clientsSvc.getClients();
  return response;
});

export const getClient = createAsyncThunk(
  "clients/getClient",
  async (id: string) => {
    const response = await clientsSvc.getClient(id);
    return response;
  }
);

export const createClient = createAsyncThunk(
  "clients/createClient/noti",
  async (payload: CreateClientPayload) => {
    const response = await clientsSvc.createCient(payload);
    return response;
  }
);

export const updateClient = createAsyncThunk(
  "clients/updateClient/noti",
  async (payload: Partial<Client>) => {
    const response = await clientsSvc.updateClient(payload);
    return response;
  }
);

export const deleteClient = createAsyncThunk(
  "clients/deleteClient/noti",
  async (id: string) => {
    const response = await clientsSvc.deleteClient(id);
    return response;
  }
);
