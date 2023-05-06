/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialModalState } from "../initials";
import { ModalType, SET_DATA_TYPE } from "../interfaces";

export const modalSlice = createSlice({
  name: "modal",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialModalState,
  reducers: {
    toggle: (state, action: PayloadAction<ModalType>) => {
      state[action.payload] = {
        display: !state[action.payload]?.display,
        data: state[action.payload]?.data,
        type: state[action.payload].type,
      };
    },
    open: (state, action: PayloadAction<keyof typeof initialModalState>) => {
      state[action.payload] = {
        display: true,
        data: state[action.payload]?.data,
        type: state[action.payload].type,
      };
    },
    close: (state, action: PayloadAction<keyof typeof initialModalState>) => {
      state[action.payload] = {
        display: false,
        data: state[action.payload]?.data,
        type: state[action.payload].type,
      };
    },
    setData(
      state,
      action: PayloadAction<{
        modal: ModalType;
        data: any;
        type?: SET_DATA_TYPE;
      }>
    ) {
      const { modal, data, type } = action.payload;
      const d = {
        display: !!state[modal]?.display,
        data,
        type,
      };
      state[modal] = d;
    },
  },
});

export const { toggle, open, close, setData } = modalSlice.actions;

export default modalSlice.reducer;
