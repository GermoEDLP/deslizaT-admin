import {
  Alert,
  Box,
  Button,
  Grid,
  Group,
  Modal,
  TextInput,
  Select,
} from "@mantine/core";
import {
  FormBikesValues,
  ModalType,
  SET_DATA_TYPE,
} from "../../../state/interfaces";
import { close } from "../../../state/slices";
import { IconAlertCircle } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { BIKE_SIZE, BIKE_TYPE } from "./bike-data.modal";
import { createBike, updateBike } from "../../../state/thunks";

const formValues: FormBikesValues = {
  brand: "",
  model: "",
  description: "",
  size: "",
  type: "",
};

export const BikeModal = () => {
  const dispacth = useAppDispatch();
  const {
    modal: { BIKE: modal },
    bikes: { loading },
    clients: { client },
  } = useAppSelector((state) => state);
  useEffect(() => {
    if (modal.data) {
      const { data } = modal;
      const init = {
        ...data,
        size: data.size.value,
        type: data.type.value,
      };
      setInitialValues(init);
      form.setValues(init);
    } else {
      setInitialValues(formValues);
    }
  }, [modal]);

  const [initialValues, setInitialValues] =
    useState<FormBikesValues>(formValues);

  const form = useForm({
    initialValues: initialValues,
    validate: {
      brand: (value) => (value ? null : "La marca es obligatoria"),
      size: (value) => (value ? null : "El rodado es obligatorio"),
      type: (value) => (value ? null : "El tipo es obligatorio"),
    },
  });
  const handleSubmit = (values: FormBikesValues) => {
    if (modal.type === SET_DATA_TYPE.NEW) {
      dispacth(createBike({ ...values, user: client?._id || "" })).then(() => {
        dispacth(close(ModalType.BIKE));
      });
    }
    if (modal.type === SET_DATA_TYPE.EDIT) {
      dispacth(updateBike({ ...values, _id: modal.data?._id })).then(() => {
        dispacth(close(ModalType.BIKE));
      });
    }
  };
  return (
    <Modal
      opened={modal.display}
      onClose={() => dispacth(close(ModalType.BIKE))}
      title={
        modal.type === SET_DATA_TYPE.NEW
          ? "Nueva bicicleta"
          : "Editar bicicleta"
      }
      size="xl"
    >
      <Box maw={"90%"} mx="auto">
        <form onSubmit={form.onSubmit((value) => handleSubmit(value))}>
          <Grid>
            <Grid.Col md={6} sm={12}>
              <TextInput
                withAsterisk
                label="Marca"
                placeholder="Vairo"
                {...form.getInputProps("brand")}
              />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
              <TextInput
                label="Modelo"
                placeholder="Vairo"
                {...form.getInputProps("model")}
              />
            </Grid.Col>
            <Grid.Col md={12} sm={12}>
              <TextInput
                label="Descripción"
                placeholder="Color roja. Frenos a disco. 21 velocidades."
                {...form.getInputProps("description")}
              />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
              <Select
                withAsterisk
                label="Rodado"
                data={BIKE_SIZE}
                placeholder='12"'
                {...form.getInputProps("size")}
              />
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
              <Select
                withAsterisk
                label="Tipo"
                data={BIKE_TYPE}
                placeholder="Ruta"
                {...form.getInputProps("type")}
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
              {modal.type === SET_DATA_TYPE.NEW ? "Crear" : "Editar"}
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};
