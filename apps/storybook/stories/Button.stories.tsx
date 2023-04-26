import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@parte-ds/ui";
import { InterfaceConsoleIcon } from "@parte-ds/icons";

const ButtonStory: Meta = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default ButtonStory;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "primary",
  },
};

export const DefaultColumn: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "primary",
    direction: "vertical",
  },
};

export const Secondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary button",
    variant: "secondary",
  },
};

export const SecondaryColored: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary colored button",
    variant: "secondary-colored",
  },
};

export const Minimal: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal button",
    variant: "minimal",
  },
};

export const MinimalColored: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal colored button",
    variant: "minimal-colored",
  },
};

export const Error: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "error button",
    variant: "error",
  },
};

export const Text: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text button",
    variant: "text",
  },
};

export const TextColored: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text colored button",
    variant: "text-colored",
  },
};
