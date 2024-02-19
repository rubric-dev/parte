import { ActionLockIcon } from "@parte-ds/icons";
import { Stacked } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { TAB_VARIANT_OPTIONS } from "../../.storybook/constant";

const StackedStory: Meta = {
  title: "Components/Controls/Tabs/Stacked",
  component: Stacked,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
      description: "Stacked size",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      options: TAB_VARIANT_OPTIONS,
      control: { type: "radio" },
      description: "Stacked의 타입",
      table: {
        defaultValue: { summary: "Primary" },
      },
    },
  },
};

export default StackedStory;
type Story = StoryObj<typeof Stacked>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Selected: Story = {
  args: {
    children: "Selected",
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    children: "TrailingIcon",
    trailingIcon: <ActionLockIcon size={12} />,
  },
};

export const IconDisabled: Story = {
  args: {
    children: "TrailingIcon Disabled",
    trailingIcon: <ActionLockIcon size={12} />,
    disabled: true,
    variant: "Primary",
  },
};
