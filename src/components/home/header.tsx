import {
  Burger,
  MediaQuery,
  Header,
  Group,
  Code,
  useMantineTheme,
} from "@mantine/core";
import { CSS } from "../../state/interfaces";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div
        style={{
          display: CSS.flex,
          alignItems: CSS.center,
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: CSS.none }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Group
          style={{
            display: CSS.flex,
            justifyContent: CSS.spaceBetween,
            width: "100vw",
          }}
        >
          <h4 onClick={() => navigate("/")} style={{ cursor: CSS.pointer }}>
            DeslizaT
          </h4>
          <Code sx={{ fontWeight: 700 }}>v0.1.0</Code>
        </Group>
      </div>
    </Header>
  );
};
