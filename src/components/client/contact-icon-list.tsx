import { Grid, Stack } from "@mantine/core";
import { ContactIcon } from "./contact-icon";
import { ClientInfo } from "../../state/interfaces";

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
