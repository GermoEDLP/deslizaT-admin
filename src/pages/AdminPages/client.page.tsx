import { Box, Button, Grid, SimpleGrid, Title } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getClient } from "../../state/thunks";
import { CSS } from "../../state/interfaces";
import { IconChevronLeft } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import { TableBikes } from "../../components/client/table-bikes";
import { Paths } from "../../components/home/items";
import { ClientActions } from "../../components/client/client-actions";
import { ClientModal } from "./modals/client.modal";
import { BikeActions } from "../../components/client/bike-actions";
import { CustomLoader } from "../../components/shared/loader";
import { ContactIconsList } from "../../components/client/contact-icon-list";
import { BikeModal } from "../../components/bike/modals/bike.modal";

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
    <CustomLoader />
  ) : (
    <>
      <Group display={CSS.flex} style={{ justifyContent: CSS.spaceBetween }}>
        <Group>
          <Button variant="light" onClick={() => navigate(Paths.CLIENTS)}>
            <IconChevronLeft />
          </Button>
          <Title order={2} my={2}>
            {client?.name} {client?.lastname}
          </Title>
        </Group>
        <ClientActions />
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
          <Group
            display={CSS.flex}
            style={{
              justifyContent: CSS.spaceBetween,
            }}
          >
            <Title order={4}>Bicicletas</Title>
            <BikeActions />
          </Group>
          <TableBikes bikes={client?.bikes || []} />
        </Box>
      </SimpleGrid>
      <ClientModal />
      <BikeModal />
    </>
  );
};
