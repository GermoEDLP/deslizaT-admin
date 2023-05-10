import { Menu, Button, Text } from "@mantine/core";
import {
  IconBike,
  IconDotsVertical,
  IconTool,
  IconUser,
} from "@tabler/icons-react";
import { Order } from "../../state/interfaces";
import { useNavigate } from "react-router-dom";

export const OrderTableActions = ({ o }: { o: Order }) => {
  const navigate = useNavigate();

  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button variant="light" color="gray" compact>
          <IconDotsVertical size={20} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown id="bikes-table-actions">
        <Menu.Item onClick={() => navigate(`/orders/${o._id}`)}>
          <IconTool />
          <Text ml={10}>Ir a la Orden</Text>
        </Menu.Item>
        <Menu.Item>
          <IconBike />
          <Text ml={10}>Ir a la bicicleta</Text>
        </Menu.Item>
        <Menu.Item onClick={() => navigate(`/clients/${o.user._id}`)}>
          <IconUser />
          <Text ml={10}>Ir al cliente</Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
