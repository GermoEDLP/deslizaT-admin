import { MantineProvider, Text } from "@mantine/core";
import { useAppSelector } from "./state/hooks";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./routes";
import { LoginPage, ProfilePage } from "./routes/routes.path";
import { RootPage } from "./pages/Root";
import ErrorPage from "./pages/Error";

export const App = () => {
  const auth = useAppSelector((store) => store.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
          errorElement: <Text>404</Text>,
        },
        {
          path: "/contacts/:id",
          element: <ProfilePage />,
          errorElement: <Text>404</Text>,
        },
      ],
    },
  ]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
