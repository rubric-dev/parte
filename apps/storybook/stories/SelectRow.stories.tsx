import { SelectRow, SelectRowProps } from "@parte-ds/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Dropdown/SelectRow",
  component: SelectRow,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<SelectRowProps> = ({ ...args }) => {
  return <SelectRow {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  variant: "element",
};
