import { AuthLoginResponse, GetAllClientsResponse } from "../state/interfaces";

const url = process.env.SERVER_URL?.toString() || "";
export class ClientsService {
  private server_url = `${url}/user`;

  async getClients(): Promise<GetAllClientsResponse> {
    const url = `${this.server_url}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
}