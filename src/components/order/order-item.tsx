import { Button, Card, Grid, Text, Textarea } from "@mantine/core";
import { MantineColor } from "@mantine/styles";
import { useRef, useState } from "react";
import { CSS, Order } from "../../state/interfaces";
import { MColor } from "../../resources/colors";

type OrderField = keyof Order;

export const OrderItem = ({
  order,
  field,
  label,
}: {
  order: Order;
  field: OrderField;
  label: string;
}) => {
  const [change, setChange] = useState<boolean>();
  const [value, setValue] = useState<any>(order[field]);
  const [initialValue, setInitialValue] = useState<any>(order[field]);
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
  return (
    <Grid.Col sm={12} md={6}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text weight={500}>{label}</Text>
        {change ? (
          <Textarea
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
            variant="unstyled"
            color="dimmed"
            autosize
            ref={textareaRef as any}
            minRows={2}
            maxRows={4}
          />
        ) : (
          <Text size="sm" color="dimmed">
            {value}
          </Text>
        )}
        <Card.Section display={CSS.flex} style={{ justifyContent: CSS.end }}>
          {change ? (
            <>
              <Button
                variant="light"
                color={MColor.gray}
                onClick={() => {
                  setValue(initialValue);
                  setChange(false);
                }}
                m={10}
              >
                Cancelar
              </Button>
              <Button
                variant="light"
                color={MColor.green}
                onClick={() => {
                  setChange(false);
                }}
                m={10}
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
