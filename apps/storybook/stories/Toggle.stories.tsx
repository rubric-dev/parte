import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Toggle, ToggleProps } from "@parte-ds/ui";

export default {
  title: "Components/Controls/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<ToggleProps> = ({ on: defaultOn, ...args }) => {
  const [on, setOn] = useState(defaultOn);
  return <Toggle {...args} on={on} onChange={setOn} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Enabled = Template.bind({});
Enabled.args = {
  on: true,
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  label: "Toggle Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Toggle Button",
  disabled: true,
};
