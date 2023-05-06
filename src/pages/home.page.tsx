import {
  AppShell,
  Burger,
  Code,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { LinksGroup } from "../components/navbar-link-group";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CSS } from "../state/interfaces";
import { SideBarItems } from "../components/home/items";
import { NavBar } from "../components/navbar";

export function HomePage() {
  const links = SideBarItems.map((item) => (
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
            style={{
              display: CSS.flex,
              alignItems: CSS.center,
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: CSS.none }}>
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
                display: CSS.flex,
                justifyContent: CSS.spaceBetween,
                width: "100vw",
              }}
            >
              <h4 onClick={() => navigate("/")} style={{ cursor: CSS.pointer }}>
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
