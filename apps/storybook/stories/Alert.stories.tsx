import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@parte-ds/ui";

const AlertStory: Meta = {
  title: "Components/Alerts/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};
export default AlertStory;

export const Default: StoryObj = {
  args: {
    type: "alert-inline",
    status: "error",
    message: "Warning message.",
  },
};

export const BasicAlert = {
  args: {
    type: "alert",
    status: "error",
    title: "Error Message",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
};

export const BasicAlertNoDescription = {
  args: {
    type: "alert",
    status: "success",
    title: "Success Message",
  },
};
export const ToastAlert = {
  args: {
    type: "toast",
    status: "info",
    title: "Info Message",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
};
