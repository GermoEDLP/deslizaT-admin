import { Paths } from "../../components/home/items";
import { getBikes, getClients, getOrders } from "../thunks";

export interface GetAllResponse<T> {
  page: number;
  total: number;
  perPage: number;
  data: T;
}

export interface Pagination {
  page: number;
  total: number;
  perPage: number;
}

export enum CSS {
  pointer = "pointer",
  center = "center",
  flex = "flex",
  flexEnd = "flex-end",
  none = "none",
  end = "end",
  start = "start",
  spaceBetween = "space-between",
  spaceAround = "space-around",
  spaceEvenly = "space-evenly",
  spaceEnd = "space-end",
  row = "row",
  column = "column",
  wrap = "wrap",
  nowrap = "nowrap",
  block = "block",
  inline = "inline",
  inlineBlock = "inline-block",
  absolute = "absolute",
  relative = "relative",
  fixed = "fixed",
  static = "static",
  inherit = "inherit",
  initial = "initial",
  unset = "unset",
  hidden = "hidden",
}

export interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  path: Paths;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; path: string }[];
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Actions: Record<Paths, any> = {
  [Paths.CLIENTS]: getClients,
  [Paths.BIKES]: getBikes,
  [Paths.ORDERS]: getOrders,
  [Paths.STORAGE]: () => {},
};
