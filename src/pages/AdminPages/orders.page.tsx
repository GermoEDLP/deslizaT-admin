import { Divider, Title } from "@mantine/core";
import { TableOrders } from "../../components/orders/orders-table";

export const OrdersPage = () => {
  return (
    <>
      <Title order={2} mb={5}>
        Ordenes de taller
      </Title>
      <Divider my={15}/>
      <TableOrders />
    </>
  );
};
