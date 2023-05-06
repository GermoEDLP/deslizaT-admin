import { Client, CreateClientPayload } from "../state/interfaces";

const url = process.env.SERVER_URL?.toString() || "";
export class ClientsService {
  private server_url = `${url}/user`;

  async getClients(): Promise<Client[]> {
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

  async createCient(client: CreateClientPayload): Promise<Client> {
    const body = {
      name: client.name,
      lastname: client.lastname,
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
      email: client.email,
      phone: client.phone,
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

  async updateClient(client: Partial<Client>): Promise<Client> {
    const url = `${this.server_url}/${client._id}`;
    const body = {
      name: client.name,
      lastname: client.lastname,
      social: {
        twitter: client.social?.twitter,
        facebook: client.social?.facebook,
        instagram: client.social?.instagram,
      },
      address: {
        street: client.address?.street,
        number: client.address?.number,
        city: client.address?.city,
        floor: client.address?.floor,
        apartment: client.address?.apartment,
      },
      email: client.email,
      phone: client.phone,
    };
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  async deleteClient(id: string): Promise<Client> {
    const url = `${this.server_url}/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  }
}
