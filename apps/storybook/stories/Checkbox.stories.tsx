import { Box, Checkbox, CheckboxProps } from "@parte-dev/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Controls/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<CheckboxProps> = ({ ...args }) => {
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

export const Default = Template.bind({});
Default.args = {
  label: "TEST",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: "TEST",
  indeterminate: true,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "TEST",
  checked: true,
};
