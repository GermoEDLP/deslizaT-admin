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
import { useHover } from "@mantine/hooks";
import { ClientCard } from "./ClientCard";

export const ClientsCards = () => {
  const { clients } = useAppSelector((state) => state.clients);
  return (
    <Grid>
      {clients.map((c: Client) => (
        <ClientCard c={c} />
      ))}
    </Grid>
  );
};
