import { NotificationProps, notifications } from "@mantine/notifications";

export interface NotificationsState {
  notification: NotificationProps | null;
  loading: boolean;
  error: string | null;
}

export enum NotificationsColor {
  ERROR = "red",
  SUCCESS = "green",
  WARNING = "yellow",
  INFO = "blue",
}

export const autoClose = 3500;

export const defaultNotificationsProps = {
  autoClose,
  withCloseButton: true,
  transition: "slide-down",
};

export interface NotificationsShowPayload {
  message: string;
  color?: NotificationsColor;
  title?: string;
  autoClose?: number;
}
