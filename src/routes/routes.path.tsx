import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import type { Router } from "@remix-run/router";
import ErrorPage from "../pages/error.page";
import { AuthState } from "../state/interfaces";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import {
  ClientesPage,
  OrdersPage,
  StoragePage,
  ClientPage,
  BikesPage,
} from "../pages/AdminPages";
import { useAppDispatch } from "../state/hooks";
import { BikePage } from "../pages/AdminPages/bike.page";
import { OrderPage } from "../pages/AdminPages/order.page";

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
                  path: "/bike/:id",
                  element: <BikePage />,
                },
                {
                  path: "/orders",
                  element: <OrdersPage />,
                },
                {
                  path: "/orders/:id",
                  element: <OrderPage />,
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
