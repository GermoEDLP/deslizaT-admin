import { Badge, Table } from "@mantine/core";
import { Order, STATUS_COLOR } from "../../state/interfaces";
import { useAppSelector } from "../../state/hooks";
import { OrderTableActions } from "./order-table-action";

export const TableOrders = () => {
  const { orders } = useAppSelector((state) => state.orders);

  return (
    <Table id="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Problema</th>
          <th>Estado</th>
          <th>Bicicleta</th>
          <th>Cliente</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order: Order) => (
          <tr key={order._id}>
            <td>
              {order._id
                ?.substring(order._id.length - 5, order._id.length)
                .toUpperCase()}
            </td>
            <td>{order.symptoms}</td>
            <td>
              <Badge color={STATUS_COLOR[order.status.value]}>
                {order.status.label}
              </Badge>
            </td>
            <td>
              {order.bike.brand}{" "}
              {order.bike.model ? `(${order.bike.model})` : ""}
            </td>
            <td>
              {order.user.name} {order.user.lastname}
            </td>
            <td>
              <OrderTableActions o={order} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
