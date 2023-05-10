import { Box, Button, Grid, SimpleGrid, Title } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getClient, getOrder } from "../../state/thunks";
import { CSS } from "../../state/interfaces";
import { IconChevronLeft } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import { TableBikes } from "../../components/client/bikes-table";
import { ClientActions } from "../../components/client/client-actions";
import { ClientModal } from "./modals/client.modal";
import { BikeActions } from "../../components/client/bike-actions";
import { CustomLoader } from "../../components/shared/loader";
import { ContactIconsList } from "../../components/client/contact-icon-list";
import { BikeModal } from "../../components/bike/modals/bike.modal";
import { OrdersModal } from "../../components/orders/modals/order.modal";

export const OrderPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { order, loading } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  useEffect(() => {
    id && dispatch(getOrder(id));
  }, [id]);
  return loading ? (
    <CustomLoader />
  ) : (
    <>
      <Group display={CSS.flex} style={{ justifyContent: CSS.spaceBetween }}>
        <Group>
          <Button variant="light" onClick={() => navigate(-1)}>
            <IconChevronLeft />
          </Button>
          <Title order={2} my={2}>
            #{order?._id.substring(order?._id.length - 5, order?._id.length)}
          </Title>
        </Group>
        <ClientActions />
      </Group>
    </>
  );
};
