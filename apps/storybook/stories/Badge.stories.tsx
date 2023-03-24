import { Story, Meta } from "@storybook/react";
import { Badge, BadgeProps } from "@parte/ui";

export default {
  title: "Components/Avatars & Badges/Badges",
  component: Badge,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<BadgeProps> = ({ ...args }) => {
  return <Badge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "555",
  badgeColor: "BLUE",
};
