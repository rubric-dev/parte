import { ActionLockIcon } from "@parte-ds/icons";
import { Tab } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { TAB_VARIANT_OPTIONS } from "../../.storybook/constant";

const TabStory: Meta = {
  title: "Components/Controls/Tabs/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
      description: "Tab size",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      options: TAB_VARIANT_OPTIONS,
      control: { type: "radio" },
      description: "Tab의 형태",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
  },
};

export default TabStory;
type Story = StoryObj<typeof Tab>;

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
