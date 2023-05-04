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
import { createClient } from "../../../state/thunks";
export enum FormValue {
  email = "email",
  phone = "phone",
  name = "name",
  lastName = "lastName",
  street = "street",
  number = "number",
  city = "city",
  floor = "floor",
  apartment = "apartment",
  instagram = "instagram",
  facebook = "facebook",
  twitter = "twitter",
}

export interface FormValuesConfig {
  required?: boolean;
  placeholder?: string;
  label?: string;
  name?: FormValue;
  span?: number;
}

export const formValuesConfig: FormValuesConfig[] = [
  {
    required: true,
    placeholder: "Nombre",
    label: "Nombre",
    name: FormValue.name,
    span: 6,
  },
  {
    required: true,
    placeholder: "Apellido",
    label: "Apellido",
    name: FormValue.lastName,
    span: 6,
  },
  {
    required: true,
    placeholder: "Email",
    label: "Email",
    name: FormValue.email,
    span: 6,
  },
  {
    required: true,
    placeholder: "123456789",
    label: "Telefono",
    name: FormValue.phone,
    span: 6,
  },
  {
    required: true,
    placeholder: "Calle",
    label: "Calle",
    name: FormValue.street,
    span: 8,
  },
  {
    required: true,
    placeholder: "Numero",
    label: "Numero",
    name: FormValue.number,
    span: 4,
  },
  {
    required: false,
    placeholder: "Ciudad",
    label: "Ciudad",
    name: FormValue.city,
    span: 4,
  },
  {
    required: false,
    placeholder: "Piso",
    label: "Piso",
    name: FormValue.floor,
    span: 4,
  },
  {
    required: false,
    placeholder: "Departamento",
    label: "Departamento",
    name: FormValue.apartment,
    span: 4,
  },
  {
    required: false,
    placeholder: "juanperez",
    label: "Instagram",
    name: FormValue.instagram,
    span: 4,
  },
  {
    required: false,
    placeholder: "juan.perez",
    label: "Facebook",
    name: FormValue.facebook,
    span: 4,
  },
  {
    required: false,
    placeholder: "juan_perez",
    label: "Twitter",
    name: FormValue.twitter,
    span: 4,
  },
];

export const ClientModal = () => {
  const values: Record<FormValue, string> = {
    email: "",
    name: "",
    lastName: "",
    street: "",
    number: "",
    city: "",
    floor: "",
    apartment: "",
    instagram: "",
    facebook: "",
    twitter: "",
    phone: "",
  };
  const dispacth = useAppDispatch();
  const {
    modal: { CLIENT: modal },
    clients: { loading },
  } = useAppSelector((state) => state);
  const form = useForm({
    initialValues: values,

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: Record<FormValue, string>) => {
    dispacth(createClient(values)).then(() => {
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
                  <Grid.Col span={span}>
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
