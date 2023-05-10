export interface Bike {
  _id?: string;
  brand: string;
  model: string;
  description: string;
  size: BIKE_SIZE_OBJ;
  type: BIKE_TYPE_OBJ;
  user: string;
  orders: string[];
}

export interface FormBikesValues {
  brand: string;
  model: string;
  description: string;
  size: string;
  type: string;
}

export type CreateBikePayload = FormBikesValues & { user: string };

export type UpdateBikePayload = Partial<CreateBikePayload> & { _id: string };
export interface BikesState {
  bikes: Bike[];
  baseBikes: Bike[];
  bike: Bike | null;
  loading: boolean;
  error: string | null;
}

export enum BIKE_SIMPLE_SIZE {
  "700C" = "622",
  '29"' = "623",
  '27,5"' = "584",
  '26"' = "559",
  '24"' = "507",
  '20"' = "406",
  '18"' = "355",
  '16"' = "305",
  '14"' = "254",
  '12"' = "203",
}

export interface BIKE_SIZE_OBJ {
  value: string;
  label: string;
}

export const BIKE_SIZE: BIKE_SIZE_OBJ[] = Object.keys(BIKE_SIMPLE_SIZE).map(
  (key: string) => ({
    value: BIKE_SIMPLE_SIZE[key as keyof typeof BIKE_SIMPLE_SIZE],
    label: key,
  })
);

export enum BIKE_SIMPLE_TYPE {
  ROAD = "Ruta",
  MOUNTAIN = "Mountain Bike",
  CITY = "Ciudad",
  BMX = "BMX",
}

export interface BIKE_TYPE_OBJ {
  value: string;
  label: string;
}

export type B_TYPE = Record<BIKE_SIMPLE_TYPE, BIKE_TYPE_OBJ>;

export const BIKE_TYPE: BIKE_TYPE_OBJ[] = Object.keys(BIKE_SIMPLE_TYPE).map(
  (key) => ({
    value: key,
    label: BIKE_SIMPLE_TYPE[key as keyof typeof BIKE_SIMPLE_TYPE],
  })
);
