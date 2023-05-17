import { Button, Card, Grid, Text, Textarea } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { CSS, Order } from "../../state/interfaces";
import { MColor } from "../../resources/colors";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { updateOrder } from "../../state/thunks";

type OrderField = keyof Order;

export const OrderItem = ({
  field,
  label,
}: {
  field: OrderField;
  label: string;
}) => {
  const dispatch = useAppDispatch();
  const { order, loading } = useAppSelector((state) => state.orders);
  const [change, setChange] = useState<boolean>();
  const [fieldValue, setFieldValue] = useState<any>(order?.[field] || "");
  const [changingValue, setChangingValue] = useState<any>(order?.[field] || "");
  const textareaRef = useRef();
  const modify = () => {
    setChange(true);
    setTimeout(() => {
      if (textareaRef.current) {
        const textarea = textareaRef.current as any;
        textarea.focus();
        textarea.selectionEnd = textarea.value.length;
      }
    }, 100);
  };
  const save = () => {
    dispatch(updateOrder({ [field]: changingValue, _id: order?._id }));
  };
  return (
    <Grid.Col sm={12} md={6}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text weight={500}>{label}</Text>
        {change ? (
          <Textarea
            value={changingValue}
            onChange={(e) => setChangingValue(e.target.value)}
            variant="unstyled"
            color="dimmed"
            onKeyUp={(e) => e.key === "Enter" && save()}
            autosize
            ref={textareaRef as any}
            minRows={2}
            maxRows={4}
          />
        ) : (
          <Text size="sm" color="dimmed">
            {fieldValue}
          </Text>
        )}
        <Card.Section display={CSS.flex} style={{ justifyContent: CSS.end }}>
          {change ? (
            <>
              <Button
                variant="light"
                color={MColor.gray}
                onClick={() => {
                  setChange(false);
                }}
                m={10}
              >
                Cancelar
              </Button>
              <Button
                variant="light"
                color={MColor.green}
                onClick={save}
                m={10}
                loading={loading}
              >
                Guardar
              </Button>
            </>
          ) : (
            <Button variant="light" onClick={modify} m={10}>
              Modificar
            </Button>
          )}
        </Card.Section>
      </Card>
    </Grid.Col>
  );
};
