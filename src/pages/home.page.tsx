import { AppShell, useMantineTheme } from "@mantine/core";
import { LinksGroup } from "../components/navbar-link-group";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBarItems } from "../components/home/items";
import { NavBar } from "../components/navbar";
import { HeaderComponent as Header } from "../components/home/header";
import { useAppSelector } from "../state/hooks";
import { notifications } from "@mantine/notifications";

export function HomePage() {
  const [opened, setOpened] = useState(false);
  const { notification } = useAppSelector((state) => state.notifications);
  useEffect(() => {
    notification && notifications.show(notification);
  }, [notification]);
  const links = SideBarItems.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      opened={opened}
      setOpened={setOpened}
    />
  ));

  const theme = useMantineTheme();
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
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Outlet />
    </AppShell>
  );
}
