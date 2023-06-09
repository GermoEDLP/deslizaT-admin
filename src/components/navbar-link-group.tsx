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
import { Actions, CSS, LinksGroupProps } from "../state/interfaces";

const useStyles = NavBarILinkGroupStyle;

export function LinksGroup({
  icon: Icon,
  label,
  path,
  links,
  opened,
  setOpened,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const hasLinks = Array.isArray(links);
  const [openedLink, setOpenedLink] = useState(false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Link to={link.path} key={link.path}>
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
          navigate(path);
          dispatch(Actions[path]());
          setOpened(false);
        }}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: CSS.flex, alignItems: CSS.center }}>
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
                transform: openedLink
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : CSS.none,
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={openedLink}>{items}</Collapse> : null}
    </>
  );
}
