import { TablerIconsProps } from "@tabler/icons-react";
import { GetAllResponse, Bike } from ".";

export type GetAllClientsResponse = GetAllResponse<Client[]>;

export interface Social {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Address {
  street: string;
  number: string;
  city: string;
  floor: number;
  apartment: number;
}

export class Contact<T> {
  type: T;
  value: string;
  code: number;

  constructor(type: T, value: string, code: number) {
    this.type = type;
    this.value = value;
    this.code = code;
  }
}

export enum ContactType {
  PHONE = "PHONE",
  EMAIL = "EMAIL",
}

export interface Client {
  _id?: string;
  name: string;
  lastname: string;
  social: Social;
  address: Address;
  contacts: Contact<ContactType>[];
  bikes: Bike[];
  emails?: string[];
  phones?: string[];
}

export interface CreateClientPayload {
  email: string;
  phone: string;
  name: string;
  lastName: string;
  street: string;
  number: string;
  city: string;
  floor: string;
  apartment: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

export interface ClientsState {
  clients: Client[];
  baseClients: Client[];
  client: Client | null;
  clientInfo: ClientInfo[] | null;
  loading: boolean;
  error: string | null;
}

export interface ClientInfo {
  title: string;
  desc: string;
  icon: (props: TablerIconsProps) => JSX.Element;
}
