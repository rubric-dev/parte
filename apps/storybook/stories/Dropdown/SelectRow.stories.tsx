import { SelectRow } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const SelectRowStory: Meta = {
  title: "Components/Dropdown/SelectRow",
  component: SelectRow,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    selected: { type: "boolean" },
    disabled: { type: "boolean" },
  },
} as Meta;

export default SelectRowStory;
type Story = StoryObj<typeof SelectRow>;

export const Default: Story = {
  args: {
    variant: "element",
    children: "Select Row",
  },
};
