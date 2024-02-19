import { Badge } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { BADGE_COLOR_OPTIONS } from "../../.storybook/constant";

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
    text: "Badge",
    type: "badge",
    badgeColor: "VIOLET",
  },
  argTypes: {
    type: {
      options: ["badge", "pills"],
      control: { type: "radio" },
      description:
        "Badge의 형태를 정합니다. `BadgeType`중 하나로 설정해야 합니다.",
      table: {
        defaultValue: { summary: "badge" },
      },
    },
    text: {
      type: "string",
      description: "Badge에 들어갈 text",
    },
    badgeColor: {
      options: BADGE_COLOR_OPTIONS,
      control: { type: "select" },
      description:
        "Badge의 색상을 정합니다. `BadgeColors`중 하나로 설정해야 합니다.",
      table: {
        defaultValue: { summary: "AUTO" },
      },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
      description: "Badge의 사이즈를 정합니다.",
      table: {
        defaultValue: { summary: "small" },
      },
    },
  },
};
