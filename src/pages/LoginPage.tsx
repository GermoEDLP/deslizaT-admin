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
} from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { authLogin } from "../state/thunks";

export function LoginPage(props: PaperProps) {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const form = useForm({
    initialValues: {
      username: "gbrassini",
      password: "123456",
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
          dispatch(authLogin(form.values));
        })}
      >
        <Stack>
          <TextInput
            required
            label="Usuario"
            placeholder="hperez"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("user", event.currentTarget.value)
            }
            error={form.errors.user && "Usuario invalido"}
            radius="md"
          />

          <PasswordInput
            required
            label="Contraseña"
            placeholder="Tu contraseña"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={form.errors.password && "Contrseña inválida"}
            radius="md"
          />
        </Stack>

        <Group position="apart" mt="xl" display={"flex"}>
          <Button type="submit" radius="xl" loading={loading}>
            Entrar
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
