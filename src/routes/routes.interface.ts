import React, { ReactNode } from "react";
import { ComponentType } from "react";
import { RouteProps } from "react-router-dom";
import { AuthState } from "../state/interfaces";

export interface PrivateRoutesProps {
  component: ReactNode;
  path: string;
  session: AuthState;
}

export interface Page {
  path: string;
  component: ReactNode;
  isPublic: boolean;
}

export enum Paths {
  CLIENTS = "/clients",
  BIKES = "/bikes",
  ORDERS = "/orders",
  STORAGE = "/storage",
}
