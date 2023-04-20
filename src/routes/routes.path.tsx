import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import type { Router } from "@remix-run/router";
import ErrorPage from "../pages/Error";
import { AuthState } from "../state/interfaces";
import { LoginPage } from "../pages/LoginPage";

export const createRouter = (auth: AuthState): Router => {
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
              element: <div>Home</div>,
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
