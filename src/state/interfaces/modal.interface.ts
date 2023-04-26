/* eslint-disable @typescript-eslint/no-explicit-any */
// Define a type for the slice state
export enum ModalType {
    CLIENT = "CLIENT",
}

export enum SET_DATA_TYPE {
    NEW = "NEW",
}

export type ModalTypeByEnum = keyof typeof ModalType;
export type ModalState = Record<ModalTypeByEnum, ModalInternalState>;

export interface ModalInternalState {
  display: boolean;
  data?: any;
  type?: SET_DATA_TYPE;
}

export const initialModalStateGenerator = () => {
  const state: { [key in ModalTypeByEnum]?: Partial<ModalInternalState> } =
    {};

  Object.keys(ModalType).forEach((key) => {
    state[key as ModalType] = {
      display: false,
    };
  });

  return state as ModalState;
};

