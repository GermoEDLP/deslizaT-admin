import { Table } from "@mantine/core";
import { BIKE_SIZE, Bike } from "../../state/interfaces";
import { BikeTableActions } from "./bike-table-actions";

export const TableBikes = ({ bikes }: { bikes: Bike[] }) => {
  const rows = bikes.map((bike: Bike) => (
    <tr key={bike._id}>
      <td>
        {bike._id
          ?.substring(bike._id.length - 5, bike._id.length)
          .toUpperCase()}
      </td>
      <td>
        {bike.brand} {bike.model ? `(${bike.model})` : ""}
      </td>
      <td>{bike.type.label}</td>
      <td>{bike.size.label}</td>
      <td>{bike.description}</td>
      <td>
        <BikeTableActions b={bike} />
      </td>
    </tr>
  ));

  return (
    <Table id="table">
      <thead>
        <tr>
          <th>#</th>
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
