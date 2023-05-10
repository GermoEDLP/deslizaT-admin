import { Group, Menu, UnstyledButton, rem } from "@mantine/core";
import {
  IconDotsVertical,
  IconEye,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { useState } from "react";
import { ClientsTableStyle } from "../../styles";
import { Client } from "../../state/interfaces";
import { Link } from "react-router-dom";

export const ClientsTableActions = ({ c }: { c: Client }) => {
  const items = [
    {
      id: 1,
      label: "Ver",
      icon: <IconEye size="0.9rem" stroke={1.5} />,
      to: `/clients/${c._id}`,
    },
    {
      id: 2,
      label: "Editar",
      icon: <IconPencil size="0.9rem" color="blue" stroke={1.5} />,
      to: `/clients/edit/${c._id}`,
    },
    {
      id: 3,
      label: "Eliminar",
      icon: <IconTrash size="0.9rem" color="#ff4d4f" stroke={1.5} />,
      to: `/clients/delete/${c._id}`,
    },
  ];
  const { classes, cx } = ClientsTableStyle();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <>
      <Menu
        width={260}
        position="bottom-end"
        transitionProps={{ transition: "pop-top-right" }}
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton
            className={cx(classes.user, {
              [classes.userActive]: userMenuOpened,
            })}
          >
            <Group spacing={7}>
              <IconDotsVertical size={rem(18)} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          {items.map((item) => (
            <Link to={item.to} style={{ textDecoration: "none" }} key={item.id}>
              <Menu.Item key={item.id} icon={item.icon}>
                {item.label}
              </Menu.Item>
            </Link>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
