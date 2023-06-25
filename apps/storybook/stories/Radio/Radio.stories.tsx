import { Radio } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const RadioStory: Meta = {
  title: "Components/Controls/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};
export default RadioStory;

type Story = StoryObj<typeof Radio>;
export const Default: Story = {
  args: {
    label: "TEST",
    value: "TEST",
    disabled: false,
  },
};
