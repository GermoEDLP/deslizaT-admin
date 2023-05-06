import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { useEffect } from "react";
import { getBike } from "../../state/thunks";
import { CustomLoader } from "../../components/shared/loader";
import { Text } from "@mantine/core";

export const BikePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { bike, loading } = useAppSelector((state) => state.bikes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    id && dispatch(getBike(id));
  }, [id]);
  return loading ? (
    <CustomLoader />
  ) : (
    <>
      <Text>{bike?.model || ""}</Text>
    </>
  );
};
