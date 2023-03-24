import { Card, CardProps, Heading, Paragraph } from "@parte-ds/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Card/DefaultCard",
  component: Card,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<CardProps> = ({ ...args }) => {
  return (
    <Card {...args} flexDirection="column" padding={20} display="flex">
      <Heading size={200}>Heading</Heading>
      <Paragraph size={300}>Paragraph</Paragraph>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
