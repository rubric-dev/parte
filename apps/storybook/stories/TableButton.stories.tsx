import { StoryObj, Meta } from "@storybook/react";
import { TableButton, TableButtonProps } from "@parte-ds/ui";
import { InterfaceConsoleIcon } from "@parte-ds/icons";

const TableButtonStory: Meta = {
  title: "Components/Buttons/TableButton",
  component: TableButton,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;
export default TableButtonStory;

type Story = StoryObj<typeof TableButton>;

export const Default: Story = {
  args: {
    children: "test",
    variant: "fill-primary",
    leadingIcon: <InterfaceConsoleIcon size={10} />,
  },
};

export const Outline: Story = {
  args: {
    children: "test",
    variant: "outline-secondary",
    trailingIcon: <InterfaceConsoleIcon size={10} />,
  },
};

export const IconButton: Story = {
  args: {
    trailingIcon: <InterfaceConsoleIcon size={10} />,
    children: undefined,
  },
};
