import { GetAllResponse } from "./shared.interface";

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
  name: string;

  lastname: string;

  social: Social;

  address: Address;

  contacts: Contact<ContactType>[];
}