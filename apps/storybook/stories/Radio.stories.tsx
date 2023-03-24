import { Radio, RadioProps } from "@parte/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Controls/RadioGroup/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<RadioProps> = ({ ...args }) => {
  return <Radio {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "TEST",
  value: "TEST",
  disabled: false,
};
