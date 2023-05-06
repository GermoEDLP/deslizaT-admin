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
  floor: string;
  apartment: string;
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
export interface Client {
  _id?: string;
  name: string;
  lastname: string;
  social: Social;
  address?: Address;
  bikes: Bike[];
  email: string;
  phone?: string;
}

export interface CreateClientPayload {
  email: string;
  phone: string;
  name: string;
  lastname: string;
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

export interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}
