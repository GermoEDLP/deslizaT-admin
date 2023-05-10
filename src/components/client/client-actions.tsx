import { Menu, Button, Text } from "@mantine/core";
import {
  IconDotsVertical,
  IconEdit,
  IconExternalLink,
  IconTool,
  IconTrash,
} from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { open, setData, show, showSuccess } from "../../state/slices";
import { ModalType, SET_DATA_TYPE } from "../../state/interfaces";
import { deleteClient } from "../../state/thunks";
import { ConfirmDeleteClient } from "./dialogs/confirm-delete.dialog";

export const ClientActions = () => {
  const dispatch = useAppDispatch();
  const { client } = useAppSelector((state) => state.clients);
  const edit = () => {
    dispatch(
      setData({
        modal: ModalType.CLIENT,
        type: SET_DATA_TYPE.EDIT,
        data: client,
      })
    );
    dispatch(open(ModalType.CLIENT));
  };
  const delClient = () => {
    client?._id && dispatch(deleteClient(client._id));
  };
  return (
    <>
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
          <Menu.Item
            onClick={() => {
              dispatch(showSuccess("Notificación enviada"));
            }}
          >
            <IconEdit />
            <Text ml={10}>Notificación</Text>
          </Menu.Item>
          <Menu.Item
            onClick={() => dispatch(open(ModalType.CONFIRM_DELETE_CLIENT))}
          >
            <IconTrash />
            <Text ml={10}>Borrar</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <ConfirmDeleteClient />
    </>
  );
};
