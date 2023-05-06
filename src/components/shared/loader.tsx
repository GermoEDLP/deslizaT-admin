import { Grid, Loader } from "@mantine/core";
import { CSS } from "../../state/interfaces";

export const CustomLoader = () => {
  return (
    <Grid
      style={{
        display: CSS.flex,
        justifyContent: CSS.center,
        marginTop: "25%",
      }}
    >
      <Loader />
    </Grid>
  );
};
