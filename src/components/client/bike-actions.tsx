import { Menu, Button, Text } from "@mantine/core";
import { IconDotsVertical, IconPlus } from "@tabler/icons-react";
import { useAppDispatch } from "../../state/hooks";
import { open, setData } from "../../state/slices";
import { ModalType, SET_DATA_TYPE } from "../../state/interfaces";

export const BikeActions = () => {
  const dispatch = useAppDispatch();
  const add = () => {
    dispatch(
      setData({ modal: ModalType.BIKE, type: SET_DATA_TYPE.NEW, data: null })
    );
    dispatch(open(ModalType.BIKE));
  };
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button variant="light" color="gray" compact>
          <IconDotsVertical size={20} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown id="bikes-table-actions">
        <Menu.Item onClick={add}>
          <IconPlus />
          <Text ml={10}>Agregar</Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
