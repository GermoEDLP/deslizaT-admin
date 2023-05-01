import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  Box,
  TextInput,
  Checkbox,
  Grid,
} from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { close } from "../../../state/slices";
import { ModalType, SET_DATA_TYPE } from "../../../state/interfaces";
import { useForm } from "@mantine/form";
export interface FormValue {
  email: string;
  name: string;
  lastName: string;
  street: string;
  number: string;
  city: string;
  floor: string;
  apartment: string;
}

export type FormValuesConfig = Record<
  keyof FormValue,
  {
    required?: boolean;
    placeholder?: string;
    label?: string;
    name?: string;
    span?: number;
  }
>;

export const formValuesConfig: FormValuesConfig = {
  email: {
    required: true,
    placeholder: "Email",
    label: "Email",
    name: "email",
    span: 12,
  },
  name: {
    required: true,
    placeholder: "Nombre",
    label: "Nombre",
    name: "name",
    span: 6,
  },
  lastName: {
    required: true,
    placeholder: "Apellido",
    label: "Apellido",
    name: "lastName",
    span: 6,
  },
  street: {
    required: true,
    placeholder: "Calle",
    label: "Calle",
    name: "street",
    span: 8,
  },
  number: {
    required: true,
    placeholder: "Numero",
    label: "Numero",
    name: "number",
    span: 4,
  },
  city: {
    required: false,
    placeholder: "Ciudad",
    label: "Ciudad",
    name: "city",
    span: 4,
  },
  floor: {
    required: false,
    placeholder: "Piso",
    label: "Piso",
    name: "floor",
    span: 4,
  },
  apartment: {
    required: false,
    placeholder: "Departamento",
    label: "Departamento",
    name: "apartment",
    span: 4,
  },
};

export const ClientModal = () => {
  const values: FormValue = {
    email: "",
    name: "",
    lastName: "",
    street: "",
    number: "",
    city: "",
    floor: "",
    apartment: "",
  };
  const dispacth = useAppDispatch();
  const { CLIENT: modal } = useAppSelector((state) => state.modal);
  const form = useForm({
    initialValues: values,

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: FormValue) => {
    console.log(values);
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
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Nombre"
                placeholder="Juan"
                {...form.getInputProps("name")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Apellido"
                placeholder="Perez"
                {...form.getInputProps("lastname")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
            </Grid.Col>
            <Grid.Col span={8}>
              <TextInput
                withAsterisk
                label="Calle"
                placeholder="Av. Siempre Viva"
                {...form.getInputProps("street")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                withAsterisk
                label="Numero"
                placeholder="123"
                {...form.getInputProps("number")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                withAsterisk
                label="Ciudad"
                placeholder="CABA"
                {...form.getInputProps("city")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                withAsterisk
                label="Piso"
                placeholder="1"
                {...form.getInputProps("floor")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                withAsterisk
                label="Departamento"
                placeholder="A"
                {...form.getInputProps("apartment")}
              />
            </Grid.Col>
          </Grid>

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};
