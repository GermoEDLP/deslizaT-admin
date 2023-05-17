import {
  Text,
  Button,
  Card,
  Divider,
  Title,
  Textarea,
  Grid,
} from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getOrder } from "../../state/thunks";
import { CSS } from "../../state/interfaces";
import { IconChevronLeft } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import { ClientActions } from "../../components/client/client-actions";
import { CustomLoader } from "../../components/shared/loader";
import { OrderItem } from "../../components/order/order-item";

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
            #
            {order?._id
              .substring(order?._id.length - 5, order?._id.length)
              .toUpperCase()}
          </Title>
        </Group>
        <ClientActions />
      </Group>
      <Divider my={20} />

      <Grid>
        {order && <OrderItem field="symptoms" label="Problema" />}
        {order && <OrderItem field="diagnostic" label="Diagnostico previo" />}
        {order && (
          <OrderItem field="taskDescription" label="Tareas realizadas" />
        )}
        {order && <OrderItem field="finalDetails" label="Detalles finales" />}
      </Grid>
    </>
  );
};
