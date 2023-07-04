import { ActionLockIcon } from "@parte-ds/icons";
import { Tab } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const TabStory: Meta = {
  title: "Components/Controls/Tabs/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    viewport: "responsive",
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
