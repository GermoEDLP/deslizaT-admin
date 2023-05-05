import { ClientsState } from "../interfaces";

export const clientsInitialState: ClientsState = {
  clients: [],
  client: null,
  baseClients: [],
  clientInfo: null,
  loading: false,
  error: null,
};
