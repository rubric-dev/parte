import { Meta, Story } from "@storybook/react";
import { Alert, AlertProps } from "@parte-dev/ui";

export default {
  title: "Components/Alerts/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<AlertProps> = ({ ...args }) => {
  return <Alert {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  type: "alert-inline",
  status: "error",
  message: "Warning message.",
};

export const BasicAlert = Template.bind({});
BasicAlert.args = {
  type: "alert",
  status: "error",
  title: "Error Message",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};

export const BasicAlertNoDescription = Template.bind({});
BasicAlertNoDescription.args = {
  type: "alert",
  status: "success",
  title: "Success Message",
};
export const ToastAlert = Template.bind({});
ToastAlert.args = {
  type: "toast",
  status: "info",
  title: "Info Message",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};
