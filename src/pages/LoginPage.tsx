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

export function LoginPage(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      user: "",
      password: "",
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

      <Divider label="Inicie sesión para continuar" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            required
            label="Usuario"
            placeholder="hperez"
            value={form.values.user}
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

        <Group position="apart" mt="xl" display={'flex'} justify-content-end>
          <Button type="submit" radius="xl">
            Entrar
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
