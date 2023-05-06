import { useAppSelector } from "../../state/hooks";

export const BikesPage = () => {
  const { bikes } = useAppSelector((state) => state.bikes);
  return (
    <>
      <h1>Bicicletas</h1>
    </>
  );
};
