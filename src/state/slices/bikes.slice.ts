import { createSlice } from "@reduxjs/toolkit";
import { createBike, getBikes, updateBike } from "../thunks/bikes.thunk";
import { initialBikeState } from "../initials";

const bikesSlice = createSlice({
  name: "bikes",
  initialState: initialBikeState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBikes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBikes.fulfilled, (state, action) => {
        state.bikes = action.payload;
        state.baseBikes = action.payload;
        state.loading = false;
      })
      .addCase(getBikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(createBike.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBike.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createBike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(updateBike.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBike.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateBike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
  },
});

// export const {  } = bikesSlice.actions;

export default bikesSlice.reducer;
