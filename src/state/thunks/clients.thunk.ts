import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthLoginPayload } from "../interfaces";
import { ClientsService } from "../../services/ClientsService";

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
