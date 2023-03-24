import { ColorList } from "@parte-dev/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Foundation/Color",
  component: ColorList,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story = () => {
  return <ColorList />;
};

export const Default = Template.bind({});
