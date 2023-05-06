import { Table } from "@mantine/core";
import { BIKE_SIZE, Bike } from "../../state/interfaces";
import { BikeTableActions } from "./bike-table-actions";

export const TableBikes = ({ bikes }: { bikes: Bike[] }) => {
  const rows = bikes.map((bike: Bike) => (
    <tr key={bike._id}>
      <td>
        {bike.brand} {bike.model ? `(${bike.model})` : ""}
      </td>
      <td>{bike.type.webName}</td>
      <td>{bike.size.webName}</td>
      <td>{bike.description}</td>
      <td>
        <BikeTableActions />
      </td>
    </tr>
  ));

  return (
    <Table id="table">
      <thead>
        <tr>
          <th>Marca (Modelo)</th>
          <th>Tipo</th>
          <th>Rodado</th>
          <th>Descrpción</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
