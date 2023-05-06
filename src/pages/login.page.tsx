import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Stack,
  Alert,
} from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { authLogin } from "../state/thunks";
import { CSS } from "../state/interfaces";
import { IconAlertCircle } from "@tabler/icons-react";

export function LoginPage(props: PaperProps) {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const form = useForm({
    initialValues: {
      username: "gbrassini",
      password: "123456",
    },
    validate: {
      username: (value) =>
        value.length === 0 ? "El Usuario es obligatorio" : null,
      password: (value) =>
        value.length === 0 ? "La contraseña es obligatoria" : null,
    },
  });

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      {...props}
      w={"50%"}
      mx={"auto"}
      my={50}
    >
      <Text size="lg" weight={500}>
        DeslizaT - Administrador de taller
      </Text>

      <Divider
        label="Inicie sesión para continuar"
        labelPosition="center"
        my="lg"
      />

      <form
        onSubmit={form.onSubmit(() => {
          form.errors;
          dispatch(authLogin(form.values));
        })}
      >
        <Stack>
          <TextInput
            label="Usuario"
            placeholder="hperez"
            {...form.getInputProps("username")}
            radius="md"
          />

          <PasswordInput
            label="Contraseña"
            placeholder="Tu contraseña"
            {...form.getInputProps("password")}
            radius="md"
          />
        </Stack>

        {error && (
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Usuario y/o contraseña incorrecta"
            color="red"
            my={15}
          >
            Intenta volver a colocar los datos e intentatalo nuevamente.
          </Alert>
        )}

        <Group position="apart" mt="xl" display={CSS.flex}>
          <Button type="submit" radius="xl" loading={loading}>
            Entrar
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
