import {
  Modal,
  Button,
  Group,
  Box,
  TextInput,
  Alert,
  Grid,
} from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { IconAlertCircle } from "@tabler/icons-react";
import { close } from "../../../state/slices";
import { Client, ModalType, SET_DATA_TYPE } from "../../../state/interfaces";
import { useForm } from "@mantine/form";
import { createClient, updateClient } from "../../../state/thunks";
import {
  FormValue,
  FormValuesConfig,
  craeteValidations,
  createInitialValues,
  formValuesConfig,
} from "./client-data.modal";
import { useEffect, useState } from "react";

export const ClientModal = () => {
  const dispacth = useAppDispatch();
  const {
    modal: { CLIENT: modal },
    clients: { loading },
  } = useAppSelector((state) => state);
  const [initialValues, setInitialValues] = useState(
    createInitialValues(modal.data || {})
  );
  useEffect(() => {
    setInitialValues(createInitialValues(modal.data || {}));
    form.setValues(createInitialValues(modal.data || {}));
  }, [modal]);
  const form = useForm({
    initialValues: initialValues,
    validate: craeteValidations(),
  });

  const handleSubmit = (values: Record<FormValue, string>) => {
    if (modal.type === SET_DATA_TYPE.NEW) {
      dispacth(createClient(values)).then(() => {
        form.reset();
        dispacth(close(ModalType.CLIENT));
      });
      return;
    }
    const payload = {
      ...values,
      _id: (modal.data as Client)._id,
      social: {
        facebook: values.facebook,
        instagram: values.instagram,
        twitter: values.twitter,
      },
      address: {
        street: values.street,
        number: values.number,
        city: values.city,
        floor: values.floor,
        apartment: values.apartment,
      },
    };
    dispacth(updateClient(payload)).then(() => {
      form.reset();
      dispacth(close(ModalType.CLIENT));
    });
  };

  return (
    <Modal
      opened={modal.display}
      onClose={() => dispacth(close(ModalType.CLIENT))}
      title={
        modal.type === SET_DATA_TYPE.NEW ? "Nuevo cliente" : "Editar cliente"
      }
      size="xl"
    >
      <Box maw={"90%"} mx="auto">
        <form onSubmit={form.onSubmit((value) => handleSubmit(value))}>
          <Grid>
            {formValuesConfig.map(
              ({
                span,
                label,
                placeholder,
                name,
                required,
              }: FormValuesConfig) => {
                const inputProps = form.getInputProps(name as any);
                return (
                  <Grid.Col span={span} key={name}>
                    <TextInput
                      withAsterisk={required}
                      label={label}
                      placeholder={placeholder}
                      {...inputProps}
                    />
                  </Grid.Col>
                );
              }
            )}
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
