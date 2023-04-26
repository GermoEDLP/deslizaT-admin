import {
  Text,
  Paper,
  Grid,
  Title,
  Group,
  Divider,
  Indicator,
} from "@mantine/core";
import { useAppSelector } from "../../state/hooks";
import { Client, ContactType } from "../../state/interfaces/clients.interface";
import { IconBike, IconMail, IconPhone } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const ClientsCards = () => {
  const { clients } = useAppSelector((state) => state.clients);
  const navigate = useNavigate();
  return (
    <Grid>
      {clients.map((c: Client) => (
        <Grid.Col
          sm={12}
          md={6}
          lg={4}
          onClick={() => navigate(`/clients/${c._id}`)}
          key={c._id}
          style={{ cursor: "pointer" }}
        >
          <Paper shadow="sm" p="md" radius="md">
            <Title order={5}>
              {c.name} {c.lastname}
            </Title>
            <Divider my={5} />
            <Group>
              <IconMail />
              <Text>
                {c.contacts.find((c) => c.type === ContactType.EMAIL)?.value}
              </Text>
            </Group>
            <Group>
              <IconPhone />
              <Text>
                {c.contacts.find((c) => c.type === ContactType.PHONE)?.value}
              </Text>
            </Group>
            <Indicator
              inline
              label={c.bikes.length}
              size={16}
              mt={15}
              offset={-1.5}
              color="rgba(0,0,0,0.3)"
            >
              <IconBike />
            </Indicator>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};
