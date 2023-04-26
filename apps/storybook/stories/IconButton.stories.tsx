import { TableThIcon } from "@parte-ds/icons";
import { IconButton } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const IconButtonStory: Meta = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

export default IconButtonStory;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "secondary",
  },
};

export const SecondaryColored: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "secondary-colored",
  },
};

export const Minimal: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "minimal",
  },
};

export const MinimalColored: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "minimal-colored",
  },
};
export const Error: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "error",
  },
};

export const Text: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "text",
  },
};

export const TextColored: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "text-colored",
  },
};
