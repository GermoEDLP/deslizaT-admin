import {
  IconBike,
  IconBuildingWarehouse,
  IconTool,
  IconUser,
} from "@tabler/icons-react";

export enum Paths {
  CLIENTS = "/clients",
  BIKES = "/bikes",
  ORDERS = "/orders",
  STORAGE = "/storage",
}

export const SideBarItems = [
  //   { label: "Dashboard", icon: IconGauge },
  {
    label: "Clientes",
    icon: IconUser,
    path: Paths.CLIENTS,
  },
  {
    label: "Bicicletas",
    icon: IconBike,
    path: Paths.BIKES,
  },
  {
    label: "Ordenes de taller",
    icon: IconTool,
    path: Paths.ORDERS,
  },
  {
    label: "Depósito",
    icon: IconBuildingWarehouse,
    path: Paths.STORAGE,
  },
];
