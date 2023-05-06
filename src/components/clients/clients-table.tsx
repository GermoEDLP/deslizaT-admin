import { Table, ScrollArea } from "@mantine/core";
import { useAppSelector } from "../../state/hooks";
import { ClientsTableActions } from "./clients-table-actions";

export function ClientsTable() {
  const { clients } = useAppSelector((state) => state.clients);

  const rows = clients.map((c, i) => {
    return (
      <tr key={i}>
        <td>
          {c.lastname}, {c.name}
        </td>
        <td>{c.email}</td>
        <td>{c.phone}</td>
        <td>
          <ClientsTableActions c={c} />
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
