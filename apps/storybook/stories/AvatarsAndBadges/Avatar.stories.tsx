import { Avatar, BadgeColors } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { Story } from "@storybook/blocks";

const AvatarStory = {
  title: "Components/Avatars & Badges/Avatars",
  component: Avatar,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;
export default AvatarStory;
type Story = StoryObj<typeof Avatar>;

const BADGE_COLOR_OPTIONS: BadgeColors[] = [
  "AUTO",
  "BLUE",
  "GREEN",
  "GREY",
  "NEUTRAL",
  "ORANGE",
  "PINK",
  "RED",
  "TEAL",
  "VIOLET",
  "YELLOW",
];

export const Default: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/57249866?v=4",
    size: "medium",
    shape: "CIRCLE",
    avatarColor: "GREEN",
  },
  argTypes: {
    src: {
      description: "Avatar의 img에 넘겨줄 src link",
      type: "string",
    },
    size: {
      options: ["small", "medium"],
      name: "size",
      type: "string",
      control: { type: "radio" },
      description: "Avatar의 크기",
      table: { type: { summary: "string" } },
    },
    shape: {
      options: ["CIRCLE", "SQUARE"],
      control: { type: "radio" },
      description: "Avatar의 형태.",
      table: { type: { summary: "CIRCLE | SQUARE" } },
    },
  },
  parameters: {
    controls: { exclude: ["avatarColor"] },
  },
};

export const NameInitial: Story = {
  args: {
    name: "Rafael",
    avatarColor: "ORANGE",
    size: "medium",
    shape: "CIRCLE",
  },
  argTypes: {
    name: {
      type: "string",
      description: "Avatar의 name",
    },
    avatarColor: {
      options: BADGE_COLOR_OPTIONS,
      control: { type: "select" },
      description:
        "Avatar의 색상을 정합니다. `BadgeColors`중 하나로 설정해야 합니다.",
      table: {
        type: { summary: "BadgeColors", defaultValue: { summary: "AUTO" } },
      },
    },
    size: {
      options: ["small", "medium"],
      name: "size",
      type: "string",
      control: { type: "radio" },
      description: "Avatar의 크기",
      table: { type: { summary: "string" } },
    },
    shape: {
      options: ["CIRCLE", "SQUARE"],
      control: { type: "radio" },
      description: "Avatar의 형태.",
      table: { type: { summary: "CIRCLE | SQUARE" } },
    },
  },
};
