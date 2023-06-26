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

export const FillPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "fill-primary",
  },
};

export const FillPrimaryColumn: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "fill-primary",
    direction: "vertical",
  },
};

export const OutlinePrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary colored button",
    variant: "outline-primary",
  },
};

export const OutlineSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary button",
    variant: "outline-secondary",
  },
};
export const GhostPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal colored button",
    variant: "ghost-primary",
  },
};

export const GhostSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal button",
    variant: "ghost-secondary",
  },
};

export const FillError: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "error button",
    variant: "fill-error",
  },
};

export const TextPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text colored button",
    variant: "text-primary",
  },
};
export const TextSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text button",
    variant: "text-secondary",
  },
};
