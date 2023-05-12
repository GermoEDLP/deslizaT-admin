import { createAsyncThunk } from "@reduxjs/toolkit";
import { BikesService } from "../../services/bikes.service";
import { CreateBikePayload, UpdateBikePayload } from "../interfaces";

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
  "bikes/createBike/noti",
  async (payload: CreateBikePayload) => {
    const response = await bikesSvc.createBike(payload);
    return response;
  }
);

export const updateBike = createAsyncThunk(
  "bikes/updateBike/noti",
  async (payload: UpdateBikePayload) => {
    const response = await bikesSvc.updateBike(payload);
    return response;
  }
);

export const deleteBike = createAsyncThunk(
  "bikes/deleteBike/noti",
  async (id: string) => {
    const response = await bikesSvc.deleteBike(id);
    return response;
  }
);
