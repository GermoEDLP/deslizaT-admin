import { createAsyncThunk } from "@reduxjs/toolkit";
import { BikesService } from "../../services/bikes.service";
import { CreateBikePayload } from "../interfaces";

const bikesSvc = new BikesService();

export const getBikes = createAsyncThunk("bikes/getBikes", async () => {
  const response = await bikesSvc.getBikes();
  return response;
});

export const getBike = createAsyncThunk("bikes/getBike", async (id: string) => {
  const response = await bikesSvc.getBike(id);
  return response;
});

export const createBike = createAsyncThunk(
  "bikes/createBike",
  async (payload: CreateBikePayload) => {
    const response = await bikesSvc.createBike(payload);
    return response;
  }
);
