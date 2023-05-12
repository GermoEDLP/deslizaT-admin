import { createSlice } from "@reduxjs/toolkit";
import { createBike, getBikes, updateBike } from "../thunks/bikes.thunk";
import { initialBikeState } from "../initials";
import { isFulfilledAction, isPendingAction, isRejectedAction } from ".";

const name = "bikes";

const bikesSlice = createSlice({
  name,
  initialState: initialBikeState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBikes.fulfilled, (state, action) => {
        state.bikes = action.payload;
        state.baseBikes = action.payload;
      })
      .addCase(createBike.fulfilled, (state, action) => {
        state.bikes.push(action.payload);
        state.baseBikes.push(action.payload);
      })
      .addCase(updateBike.fulfilled, (state, action) => {
        const newBikes = state.bikes.map((bike) => {
          if (bike._id === action.payload._id) {
            return action.payload;
          }
          return bike;
        });
        state.bikes = newBikes;
        state.baseBikes = newBikes;
      })

      .addMatcher(
        (action) => isPendingAction(action, name),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => isFulfilledAction(action, name),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => isRejectedAction(action, name),
        (state, action) => {
          state.error = action.error.message || "Something went wrong";
          state.loading = false;
        }
      );
  },
});

// export const {  } = bikesSlice.actions;

export default bikesSlice.reducer;
