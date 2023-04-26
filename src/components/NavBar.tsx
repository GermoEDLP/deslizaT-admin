import { Code, Group, Navbar, ScrollArea } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { NavBarStyle } from "../styles";

const useStyles = NavBarStyle;

export const NavBar = ({
  links,
  opened,
}: {
  links: JSX.Element[];
  opened: boolean;
}) => {
  const { classes } = useStyles();
  return (
    <Navbar
      p="md"
      className={classes.navbar}
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
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
