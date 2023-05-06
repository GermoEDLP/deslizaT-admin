import { Client } from "../../../state/interfaces";

export enum FormValue {
  email = "email",
  phone = "phone",
  name = "name",
  lastname = "lastname",
  street = "street",
  number = "number",
  city = "city",
  floor = "floor",
  apartment = "apartment",
  instagram = "instagram",
  facebook = "facebook",
  twitter = "twitter",
}

export interface FormValuesConfig {
  required?: boolean;
  placeholder?: string;
  label?: string;
  name?: FormValue;
  span?: number;
  validate?: any;
}

export const formValuesConfig: FormValuesConfig[] = [
  {
    required: true,
    placeholder: "Nombre",
    label: "Nombre",
    name: FormValue.name,
    span: 6,
    validate: (value: string) =>
      value.length === 0 ? "El nombre es requerido" : null,
  },
  {
    required: true,
    placeholder: "Apellido",
    label: "Apellido",
    name: FormValue.lastname,
    span: 6,
    validate: (value: string) =>
      value.length === 0 ? "El apellido es requerido" : null,
  },
  {
    required: true,
    placeholder: "Email",
    label: "Email",
    name: FormValue.email,
    span: 6,
    validate: (value: string) =>
      value.length === 0
        ? "El email es requerido"
        : /^\S+@\S+$/.test(value)
        ? null
        : "Invalid email",
  },
  {
    required: false,
    placeholder: "123456789",
    label: "Telefono",
    name: FormValue.phone,
    span: 6,
  },
  {
    required: false,
    placeholder: "Calle",
    label: "Calle",
    name: FormValue.street,
    span: 8,
  },
  {
    required: false,
    placeholder: "Numero",
    label: "Numero",
    name: FormValue.number,
    span: 4,
  },
  {
    required: false,
    placeholder: "Ciudad",
    label: "Ciudad",
    name: FormValue.city,
    span: 4,
  },
  {
    required: false,
    placeholder: "Piso",
    label: "Piso",
    name: FormValue.floor,
    span: 4,
  },
  {
    required: false,
    placeholder: "Depto.",
    label: "Depto.",
    name: FormValue.apartment,
    span: 4,
  },
  {
    required: false,
    placeholder: "juanperez",
    label: "Instagram",
    name: FormValue.instagram,
    span: 4,
  },
  {
    required: false,
    placeholder: "juan.perez",
    label: "Facebook",
    name: FormValue.facebook,
    span: 4,
  },
  {
    required: false,
    placeholder: "juan_perez",
    label: "Twitter",
    name: FormValue.twitter,
    span: 4,
  },
];

export const createInitialValues: (c: Client) => Record<FormValue, string> = (
  c
) => {
  const obj: any = {};
  formValuesConfig.forEach((item) => {
    const { name } = item;
    if (name) {
      const value = getValueFromClient(c, name);
      obj[name] = value !== undefined ? value : "";
    }
  });
  return obj;
};

const getValueFromClient = (
  c: Client,
  name: FormValue
): string | number | undefined => {
  switch (name) {
    case FormValue.name:
      return c.name;
    case FormValue.lastname:
      return c.lastname;
    case FormValue.street:
      return c.address?.street;
    case FormValue.number:
      return c.address?.number;
    case FormValue.city:
      return c.address?.city;
    case FormValue.floor:
      return c.address?.floor;
    case FormValue.apartment:
      return c.address?.apartment;
    case FormValue.email:
      return c.email;
    case FormValue.phone:
      return c.phone;
    case FormValue.instagram:
      return c.social?.instagram;
    case FormValue.facebook:
      return c.social?.facebook;
    case FormValue.twitter:
      return c.social?.twitter;
    default:
      return undefined;
  }
};
export const craeteValidations = () => {
  const obj: any = {};
  formValuesConfig.forEach((item) =>
    item?.name ? (obj[item.name] = item.validate) : null
  );
  return obj;
};
