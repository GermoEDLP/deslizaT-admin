import { ClientsState } from "../interfaces";

export const clientsInitialState: ClientsState = {
  clients: [],
  client: null,
  baseClients: [],
  clientInfo: null,
  pagination: {
    page: 0,
    total: 0,
    perPage: 0,
  },
  loading: false,
  error: null,
};
