import { useDisclosure } from "@mantine/hooks";
import { Dialog, Group, Button, TextInput, Text } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { close } from "../../../state/slices";
import { ModalType } from "../../../state/interfaces";

export const ConfirmDeleteClient = () => {
  const { CONFIRM_DELETE_CLIENT: modal } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();
  const onHide = () => dispatch(close(ModalType.CONFIRM_DELETE_CLIENT));

  return (
    <Dialog
      opened={modal.display}
      withCloseButton
      onClose={onHide}
      size="lg"
      radius="md"
    >
      <Text size="sm" mb="xs" weight={500}>
        Confimación de eliminación
      </Text>

      <Text size="sm" mb="xs">
        ¿Está seguro que desea eliminar el cliente?
      </Text>
    </Dialog>
  );
};
