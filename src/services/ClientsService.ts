import {
  AuthLoginResponse,
  Client,
  CreateClientPayload,
  GetAllClientsResponse,
} from "../state/interfaces";

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

  async getClient(id: string): Promise<Client> {
    const url = `${this.server_url}/${id}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }

  /**
   * _id?: string;
  name: string;
  lastname: string;
  social: Social;
  address: Address;
  contacts: Contact<ContactType>[];
  bikes: string[];
   */

  async createCient(client: CreateClientPayload): Promise<Client> {
    const body = {
      name: client.name,
      lastname: client.lastName,
      social: {
        twitter: client.twitter,
        facebook: client.facebook,
        instagram: client.instagram,
      },
      address: {
        street: client.street,
        number: client.number,
        city: client.city,
        floor: client.floor,
        apartment: client.apartment,
      },
      emails: [client.email],
      phones: [client.phone],
    };
    const url = `${this.server_url}`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
}
