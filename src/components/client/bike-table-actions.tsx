import { Menu, Button, Text } from "@mantine/core";
import {
  IconDotsVertical,
  IconEdit,
  IconTool,
  IconTrash,
} from "@tabler/icons-react";
import { useAppDispatch } from "../../state/hooks";
import { open, setData } from "../../state/slices";
import { Bike, ModalType, SET_DATA_TYPE } from "../../state/interfaces";

export const BikeTableActions = ({ b }: { b: Bike }) => {
  const dispatch = useAppDispatch();
  const edit = () => {
    dispatch(
      setData({ modal: ModalType.BIKE, type: SET_DATA_TYPE.EDIT, data: b })
    );
    dispatch(open(ModalType.BIKE));
  };
  const order = () => {
    dispatch(
      setData({ modal: ModalType.ORDER, type: SET_DATA_TYPE.NEW, data: b })
    );
    dispatch(open(ModalType.ORDER));
  };

  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button variant="light" color="gray" compact>
          <IconDotsVertical size={20} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown id="bikes-table-actions">
        <Menu.Item onClick={edit}>
          <IconEdit />
          <Text ml={10}>Editar</Text>
        </Menu.Item>
        <Menu.Item onClick={order}>
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
