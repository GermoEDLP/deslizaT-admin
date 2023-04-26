import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { close } from "../../../state/slices";
import { ModalType, SET_DATA_TYPE } from "../../../state/interfaces";

export const ClientModal = () => {
  const dispacth = useAppDispatch();
  const { CLIENT: modal } = useAppSelector((state) => state.modal);

  return (
    <Modal
      opened={modal.display}
      onClose={() => dispacth(close(ModalType.CLIENT))}
      title={
        modal.type === SET_DATA_TYPE.NEW ? "Nuevo cliente" : "Editar cliente"
      }
    ></Modal>
  );
};
