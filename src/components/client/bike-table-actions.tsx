import { Menu, Button, Text } from "@mantine/core";
import {
  IconDotsVertical,
  IconEdit,
  IconTool,
  IconTrash,
} from "@tabler/icons-react";

export const BikeTableActions = () => {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button variant="light" color="gray" compact>
          <IconDotsVertical size={20}/>
        </Button>
      </Menu.Target>

      <Menu.Dropdown id="bikes-table-actions">
        <Menu.Item>
          <IconEdit />
          <Text ml={10}>Editar</Text>
        </Menu.Item>
        <Menu.Item>
          <IconTool />
          <Text ml={10}>Iniciar Orden de taller</Text>
        </Menu.Item>
        <Menu.Item>
          <IconTrash />
          <Text ml={10}>Borrar</Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
