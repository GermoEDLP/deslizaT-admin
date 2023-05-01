import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import type { Router } from "@remix-run/router";
import ErrorPage from "../pages/Error";
import { AuthState } from "../state/interfaces";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import {
  ClientesPage,
  OrdersPage,
  StoragePage,
  ClientPage,
  BikesPage,
} from "../pages/AdminPages";
import { useAppDispatch } from "../state/hooks";
import { getClients } from "../state/thunks";

export const createRouter = (auth: AuthState): Router => {
  const dispatch = useAppDispatch();
  return createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/login",
          element: auth.user ? <Navigate to={"/"} /> : <LoginPage />,
        },
        {
          path: "/",
          element: auth.user ? <Outlet /> : <Navigate to={"/login"} />,
          children: [
            {
              path: "/",
              element: <HomePage />,
              children: [
                {
                  path: "/",
                  element: <Navigate to="/clients" />,
                },
                {
                  path: "/clients",
                  element: <ClientesPage />,
                  
                },
                {
                  path: "/clients/:id",
                  element: <ClientPage />,
                },
                {
                  path: "/orders",
                  element: <OrdersPage />,
                },
                {
                  path: "/storage",
                  element: <StoragePage />,
                },
                {
                  path: "/bikes",
                  element: <BikesPage />,
                },
              ],
            },
            {
              path: "/about",
              element: <div>About</div>,
            },
          ],
        },
      ],
    },
  ]);
};
