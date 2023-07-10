import { ActionCrossIcon, InterfaceConsoleIcon } from "@parte-ds/icons";
import { TableButton } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { BUTTON_VARIANT_OPTIONS } from "../../.storybook/constant";

const TableButtonStory: Meta = {
  title: "Components/Buttons/TableButton",
  component: TableButton,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    variant: {
      options: ["fill-primary", "outline-secondary"],
      control: { type: "radio" },
      description: "Button의 형태",
      table: {
        defaultValue: { summary: "fill-primary" },
      },
    },
    trailingIcon: {
      description: "Button 뒤쪽에 올 아이콘",
      table: { type: { summary: "ReactNode" } },
    },
    leadingIcon: {
      description: "Button 앞쪽에 올 아이콘",
      table: { type: { summary: "ReactNode" } },
    },
  },
} as Meta;
export default TableButtonStory;

type Story = StoryObj<typeof TableButton>;

export const Default: Story = {
  args: {
    children: "test",
    variant: "fill-primary",
    leadingIcon: <InterfaceConsoleIcon size={10} />,
    disabled: false,
  },
};

export const OutlineIconButton: Story = {
  args: {
    variant: "outline-secondary",
    trailingIcon: <ActionCrossIcon size={10} />,
  },
};
