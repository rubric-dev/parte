import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@parte-dev/ui";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<ButtonProps> = ({ ...args }) => {
  return <Button {...args}>button</Button>;
};

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Minimal = Template.bind({});
Minimal.args = {
  variant: "minimal",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};
