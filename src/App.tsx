import { MantineProvider, Text } from "@mantine/core";
import { useAppSelector } from "./state/hooks";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes/routes.path";

export const App = () => {
  const auth = useAppSelector((store) => store.auth);

  const router = createRouter(auth);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
