import { Button, Divider, Group, Input, Title } from "@mantine/core";
import { ClientsCards } from "../../components/clients/clients-card";
import { CSS, ModalType, SET_DATA_TYPE } from "../../state/interfaces";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../state/hooks";
import { open, search, setData } from "../../state/slices";
import { ClientModal } from "./modals/client.modal";

export const ClientesPage = () => {
  const [term, setTerm] = useState("");
  const dispatch = useAppDispatch();
  const handleChange = (e: any) => {
    setTerm(e.target.value);
  };

  const openModal = () => {
    dispatch(
      setData({ modal: ModalType.CLIENT, type: SET_DATA_TYPE.NEW, data: null })
    );
    dispatch(open(ModalType.CLIENT));
  };

  useEffect(() => {
    dispatch(search(term));
  }, [term]);
  return (
    <>
      <Group
        display={CSS.flex}
        style={{
          justifyContent: CSS.spaceBetween,
          alignItems: CSS.flexEnd,
        }}
      >
        <Title order={1}>Clientes</Title>
        <Input
          icon={<IconSearch />}
          placeholder="Buscar"
          value={term}
          onChange={(e) => handleChange(e)}
        />
        <Button variant="light" color="green" radius="md" onClick={openModal}>
          <IconPlus />
        </Button>
      </Group>
      <Divider my={10} />
      <ClientsCards />
      <ClientModal />
    </>
  );
};
