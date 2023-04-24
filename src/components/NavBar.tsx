import { Code, Group, Navbar, ScrollArea } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { NavBarStyle } from "../styles";

const useStyles = NavBarStyle;

export const NavBar = ({ links }: { links: JSX.Element[] }) => {
  const { classes } = useStyles();
  return (
    <Navbar p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <h4 style={{ margin: "2px 0" }}>DeslizaT</h4>
          <Code sx={{ fontWeight: 700 }}>v0.1.0</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Cerrar sesión</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};
