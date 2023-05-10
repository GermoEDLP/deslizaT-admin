import { Grid } from "@mantine/core";
import { useAppSelector } from "../../state/hooks";
import { Client } from "../../state/interfaces/clients.interface";
import { ClientCard } from "./client-card";

export const ClientsCards = () => {
  const { clients } = useAppSelector((state) => state.clients);
  return (
    <Grid>
      {clients.map((c: Client) => (
        <ClientCard c={c} key={c._id} />
      ))}
    </Grid>
  );
};
