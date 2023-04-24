import { Grid } from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconBike,
  IconTool,
  IconBuildingWarehouse,
} from "@tabler/icons-react";
import { LinksGroup } from "../components/NavBarLinkGroup";
import { HomePageStyle } from "../styles";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

const mockdata = [
  //   { label: "Dashboard", icon: IconGauge },
  { label: "Clientes", icon: IconUser, path: "/clients" },
  { label: "Bicicletas", icon: IconBike, path: "/bikes" },
  { label: "Ordenes de taller", icon: IconTool, path: "/orders" },
  { label: "Depósito", icon: IconBuildingWarehouse, path: "/storage" },
];

const useStyles = HomePageStyle;

export function HomePage() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <NavBar links={links} />
        </Grid.Col>
        <Grid.Col span={9}>
          <Outlet />
        </Grid.Col>
      </Grid>
    </>
  );
}
