import { Box, Button, Grid, Loader, SimpleGrid, Stack } from "@mantine/core";
import { ContactIcon } from "../../components/clients/ContactIcon";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getClient } from "../../state/thunks";
import { ClientInfo } from "../../state/interfaces";
import { IconChevronLeft } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import { Paths } from "../../routes";

export interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
}

export function ContactIconsList({ data }: { data: ClientInfo[] }) {
  if (!data) return null;
  const items = data.map((item, index) => (
    <ContactIcon
      key={index}
      title={item.title}
      description={item.desc}
      icon={item.icon}
    />
  ));
  return <Stack>{items}</Stack>;
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
              <Grid.Col span={6}>
                <ContactIconsList data={clientInfo.slice(0, 2)} />
              </Grid.Col>
              <Grid.Col span={6}>
                <ContactIconsList data={clientInfo.slice(2, 4)} />
              </Grid.Col>
            </Grid>
          )}
        </Box>
      </SimpleGrid>
    </>
  );
};
