import {
  AppShell,
  Burger,
  Code,
  Grid,
  Group,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IconUser,
  IconBike,
  IconTool,
  IconBuildingWarehouse,
} from "@tabler/icons-react";
import { LinksGroup } from "../components/NavBarLinkGroup";
import { HomePageStyle } from "../styles";
import { NavBar } from "../components/NavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getClients } from "../state/thunks";
import { Paths } from "../routes";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const mockdata = [
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

const useStyles = HomePageStyle;

export function HomePage() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  const navigate = useNavigate();

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavBar opened={opened} links={links} />}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Group
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h4 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                DeslizaT
              </h4>
              <Code sx={{ fontWeight: 700 }}>v0.1.0</Code>
            </Group>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}

/**<Grid>
        <MediaQuery minWidth={850}>
          <Grid.Col span={3}>
            <NavBar links={links} />
          </Grid.Col>
          <Grid.Col span={9}>
            <Outlet />
          </Grid.Col>
        </MediaQuery>
        <MediaQuery maxWidth={849}>
          Hola
          <Burger opened={opened} onClick={toggle} size={"sm"} />
          
        </MediaQuery>
      </Grid> */
