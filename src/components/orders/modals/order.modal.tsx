import {
  Alert,
  Box,
  Button,
  Grid,
  Group,
  Modal,
  TextInput,
} from "@mantine/core";
import {
  Bike,
  FormOrderValues,
  ModalType,
  SET_DATA_TYPE,
} from "../../../state/interfaces";
import { close } from "../../../state/slices";
import { IconAlertCircle } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { useForm } from "@mantine/form";
import { formOrderValues as initialValues } from "../../../state/initials";
import { createOrder } from "../../../state/thunks";

export const OrdersModal = () => {
  const dispacth = useAppDispatch();
  const {
    modal: { ORDER: modal },
    orders: { loading },
    clients: { clients },
  } = useAppSelector((state) => state);

  const form = useForm({
    initialValues,
    validate: {
      symptoms: (value) => (value ? null : "El problema es obligatorio"),
    },
  });
  const handleSubmit = (values: FormOrderValues) => {
    dispacth(
      createOrder({
        ...values,
        bike: (modal.data as Bike)._id || "",
        user:
          clients.find((c) => c._id === (modal.data as Bike).user)?._id || "",
      })
    ).then(() => {
      dispacth(close(ModalType.ORDER));
    });
  };
  return (
    <Modal
      opened={modal.display}
      onClose={() => dispacth(close(ModalType.ORDER))}
      title={"Nueva orden"}
      size="xl"
    >
      <Box maw={"90%"} mx="auto">
        <form onSubmit={form.onSubmit((value) => handleSubmit(value))}>
          <Grid>
            <Grid.Col md={6} sm={12}>
              <TextInput
                withAsterisk
                label="Problema"
                placeholder="Ruido en la caja pedalera, etc"
                {...form.getInputProps("symptoms")}
              />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
              <TextInput
                label="Posible solución"
                placeholder="Cambio de caja pedalera, etc"
                {...form.getInputProps("diagnostic")}
              />
            </Grid.Col>
          </Grid>

          {Object.keys(form.errors).length > 0 && (
            <Alert
              icon={<IconAlertCircle size="1rem" />}
              title="Campos obligatorios faltantes"
              color="red"
              my={15}
            >
              Revisa los campos incompletos o con información invalida.
            </Alert>
          )}
          <Group position="right" mt="md">
            <Button type="submit" loading={loading}>
              Crear
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};
