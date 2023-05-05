import {
  Box,
  Button,
  Grid,
  Loader,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { ContactIcon } from "../../components/client/ContactIcon";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getClient } from "../../state/thunks";
import { ClientInfo } from "../../state/interfaces";
import { IconChevronLeft } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import { Paths } from "../../routes";
import { TableBikes } from "../../components/client/TableBikes";

export interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function ContactIconsList({ data }: { data: ClientInfo }) {
  if (!data) return null;
  return (
    <Grid.Col md={6} sm={12}>
      <Stack>
        <ContactIcon
          title={data.title}
          description={data.desc}
          icon={data.icon}
        />
      </Stack>
    </Grid.Col>
  );
}

export const ClientPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { client, loading, clientInfo } = useAppSelector(
    (state) => state.clients
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    id && dispatch(getClient(id));
  }, [id]);
  return loading ? (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "25%",
      }}
    >
      <Loader />
    </Grid>
  ) : (
    <>
      <Group>
        <Button variant="light" onClick={() => navigate(Paths.CLIENTS)}>
          <IconChevronLeft />
        </Button>
        <h2 style={{ margin: "2rem 1rem" }}>
          {client?.name} {client?.lastname}
        </h2>
      </Group>
      <SimpleGrid>
        <Box
          sx={(theme) => ({
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            backgroundColor: theme.white,
          })}
        >
          {clientInfo && (
            <Grid>
              {clientInfo.map((item) => (
                <ContactIconsList data={item} />
              ))}
            </Grid>
          )}
        </Box>
        <Box>
          <Title order={4}>Bicicletas</Title>
          <TableBikes bikes={client?.bikes || []} />
        </Box>
      </SimpleGrid>
    </>
  );
};
