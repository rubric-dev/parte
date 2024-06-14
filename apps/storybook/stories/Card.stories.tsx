import { Card, Headline, Paragraph } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Card/DefaultCard",
  component: Card,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <Card {...args} flexDirection="column" padding={20} display="flex">
        <Headline size={200}>Heading</Headline>
        <Paragraph size={300}>Paragraph</Paragraph>
      </Card>
    );
  },
};
export const Disabled: Story = {
  args: { disabled: true },
  render: ({ ...args }) => {
    return (
      <Card {...args} flexDirection="column" padding={20} display="flex">
        <Headline size={200}>Heading</Headline>
        <Paragraph size={300}>Paragraph</Paragraph>
      </Card>
    );
  },
};
