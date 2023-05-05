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

export enum BIKE_SIMPLE_SIZE {
  "700C" = 622,
  '29"' = 622,
  '27,5"' = 584,
  '26"' = 559,
  '24"' = 507,
  '20"' = 406,
  '18"' = 355,
  '16"' = 305,
  '14"' = 254,
  '12"' = 203,
}

export interface BIKE_SIZE_OBJ {
  code: number;
  webName: string;
  description: string;
}

export type B_SIZE = Record<BIKE_SIMPLE_SIZE, BIKE_SIZE_OBJ>;

export const BIKE_SIZE: B_SIZE = {
  [BIKE_SIMPLE_SIZE["700C"]]: {
    code: 622,
    webName: "700C",
    description: "700C",
  },
  [BIKE_SIMPLE_SIZE['29"']]: {
    code: 622,
    webName: '29"',
    description: '29"',
  },
  [BIKE_SIMPLE_SIZE['27,5"']]: {
    code: 584,
    webName: '27,5"',
    description: '27,5"',
  },
  [BIKE_SIMPLE_SIZE['26"']]: {
    code: 559,
    webName: '26"',
    description: '26"',
  },
  [BIKE_SIMPLE_SIZE['24"']]: {
    code: 507,
    webName: '24"',
    description: '24"',
  },
  [BIKE_SIMPLE_SIZE['20"']]: {
    code: 406,
    webName: '20"',
    description: '20"',
  },
  [BIKE_SIMPLE_SIZE['18"']]: {
    code: 355,
    webName: '18"',
    description: '18"',
  },
  [BIKE_SIMPLE_SIZE['16"']]: {
    code: 305,
    webName: '16"',
    description: '16"',
  },
  [BIKE_SIMPLE_SIZE['14"']]: {
    code: 254,
    webName: '14"',
    description: '14"',
  },
  [BIKE_SIMPLE_SIZE['12"']]: {
    code: 203,
    webName: '12"',
    description: '12"',
  },
};

export enum BIKE_SIMPLE_TYPE {
  ROAD = "ROAD",
  MOUNTAIN = "MOUNTAIN",
  CITY = "CITY",
  BMX = "BMX",
}

export interface BIKE_TYPE_OBJ {
  name: BIKE_SIMPLE_TYPE;
  webName: string;
  description: string;
}

export type B_TYPE = Record<BIKE_SIMPLE_TYPE, BIKE_TYPE_OBJ>;

export const BIKE_TYPE: B_TYPE = {
  [BIKE_SIMPLE_TYPE.ROAD]: {
    name: BIKE_SIMPLE_TYPE.ROAD,
    webName: "Ruta",
    description: "Bicicletas de ruta",
  },
  [BIKE_SIMPLE_TYPE.MOUNTAIN]: {
    name: BIKE_SIMPLE_TYPE.MOUNTAIN,
    webName: "Montaña",
    description: "Bicicletas de montaña",
  },
  [BIKE_SIMPLE_TYPE.CITY]: {
    name: BIKE_SIMPLE_TYPE.CITY,
    webName: "Ciudad",
    description: "Bicicletas de ciudad",
  },
  [BIKE_SIMPLE_TYPE.BMX]: {
    name: BIKE_SIMPLE_TYPE.BMX,
    webName: "BMX",
    description: "Bicicletas BMX",
  },
};
