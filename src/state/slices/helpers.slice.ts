import { AnyAction } from "@reduxjs/toolkit";

enum ActionType {
  NOTIFICATION = "NOTIFICATION",
}

export const isPendingAction = (action: AnyAction, includes: string) => {
  return (
    action.type.endsWith("/pending") && action.type.includes(`${includes}/`)
  );
};
export const isRejectedAction = (action: AnyAction, includes: string) =>
  action.type.endsWith("/rejected") && action.type.includes(`${includes}/`);

export const isFulfilledAction = (action: AnyAction, includes: string) =>
  action.type.endsWith("/fulfilled") && action.type.includes(`${includes}/`);

export const triggerSuccessNotification = (action: AnyAction) => {
  return action.type.includes("noti") && action.type.includes("fulfilled");
};

export const triggerRejectNotification = (action: AnyAction) => {
  return action.type.includes("noti") && action.type.includes("rejected");
};
