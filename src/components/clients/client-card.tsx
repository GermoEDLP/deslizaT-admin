import {
  Divider,
  Grid,
  Group,
  Indicator,
  Paper,
  Title,
  Text,
} from "@mantine/core";
import { IconBike, IconMail, IconPhone } from "@tabler/icons-react";
import { Client } from "../../state/interfaces";
import { useNavigate } from "react-router-dom";
import { useHover } from "@mantine/hooks";

export const ClientCard = ({ c }: { c: Client }) => {
  const navigate = useNavigate();
  const { hovered, ref } = useHover();

  return (
    <Grid.Col
      sm={12}
      md={6}
      lg={4}
      onClick={() => navigate(`/clients/${c._id}`)}
      key={c._id}
      style={{ cursor: "pointer" }}
    >
      <Paper shadow={hovered ? "xl" : "sm"} p="md" radius="md" ref={ref}>
        <Title order={5}>
          {c.name} {c.lastname}
        </Title>
        <Divider my={5} />
        <Group>
          <IconMail />
          <Text>{c.email}</Text>
        </Group>
        <Group>
          <IconPhone />
          <Text>{c.phone}</Text>
        </Group>
        <Indicator
          inline
          label={(c.bikes || []).length}
          size={16}
          mt={15}
          offset={-1.5}
          color="rgba(0,0,0,0.3)"
        >
          <IconBike />
        </Indicator>
      </Paper>
    </Grid.Col>
  );
};
