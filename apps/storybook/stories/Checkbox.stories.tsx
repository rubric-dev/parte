import { Box, Checkbox } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Controls/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Checkbox>;

const Renderer = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <Box display="flex" gap={12} flexDirection="column">
      <Checkbox {...args} onChange={onChange} checked={checked} />
      <Checkbox {...args} disabled onChange={onChange} checked={checked} />
    </Box>
  );
};

export const Default: Story = {
  args: {
    label: "TEST",
  },
  render: Renderer,
};

export const Indeterminate: Story = {
  args: {
    label: "TEST",
    indeterminate: true,
  },
  render: Renderer,
};

export const Checked: Story = {
  args: {
    label: "TEST",
    checked: true,
  },
  render: Renderer,
};
