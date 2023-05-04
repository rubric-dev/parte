import { Badge } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const BadgeStory: Meta = {
  title: "Components/Avatars & Badges/Badges",
  component: Badge,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};
export default BadgeStory;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "555",
    badgeColor: "BLUE",
  },
};
