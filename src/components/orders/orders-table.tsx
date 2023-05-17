import { Badge, Table } from "@mantine/core";
import { Order, STATUS_COLOR } from "../../state/interfaces";
import { useAppSelector } from "../../state/hooks";
import { OrderTableActions } from "./order-table-action";
import { useNavigate } from "react-router-dom";

export const TableOrders = () => {
  const { orders } = useAppSelector((state) => state.orders);
  const navigate = useNavigate();
  const go = (o: Order) => navigate(`/orders/${o._id}`);
  return (
    <Table id="table" striped highlightOnHover>
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
          <tr key={order._id} style={{ cursor: "pointer" }}>
            <td onClick={() => go(order)}>
              {order._id
                ?.substring(order._id.length - 5, order._id.length)
                .toUpperCase()}
            </td>
            <td onClick={() => go(order)}>{order.symptoms}</td>
            <td onClick={() => go(order)}>
              <Badge color={STATUS_COLOR[order.status.value]}>
                {order.status.label}
              </Badge>
            </td>
            <td onClick={() => go(order)}>
              {order.bike.brand}{" "}
              {order.bike.model ? `(${order.bike.model})` : ""}
            </td>
            <td onClick={() => go(order)}>
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
