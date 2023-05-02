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

export const FillPrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "fill-primary",
  },
};

export const OutlinePrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "outline-primary",
  },
};

export const OutlineSecondary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "outline-secondary",
  },
};

export const GhostPrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "ghost-primary",
  },
};
export const GhostSecondary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "ghost-secondary",
  },
};

export const FillError: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "fill-error",
  },
};

export const TextPrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "text-primary",
  },
};

export const TextSecondary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "text-secondary",
  },
};
