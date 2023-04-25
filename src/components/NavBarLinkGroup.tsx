import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { NavBarILinkGroupStyle } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../state/hooks";
import { getClients } from "../state/thunks";
import { Paths } from "../routes";

const useStyles = NavBarILinkGroupStyle;

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  path: Paths;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; path: string }[];
}

export const Actions: Record<Paths, any> = {
  [Paths.CLIENTS]: getClients,
  [Paths.BIKES]: () => {},
  [Paths.ORDERS]: () => {},
  [Paths.STORAGE]: () => {},
};

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  path,
  links,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Link to={link.path}>
      <Text<"a">
        component="a"
        className={classes.link}
        href={link.link}
        key={link.label}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          navigate(path);
          dispatch(Actions[path]());
        }}
        // onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size="1.1rem" />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
