import { FilterButton } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const FilterButtonStory: Meta = {
  title: "Components/Buttons/FilterButton",
  component: FilterButton,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    type: {
      options: ["fill", "outline"],
      control: { type: "radio" },
      description: "Button 형태",
      table: {
        defaultValue: {
          summary: "fill",
        },
      },
    },
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
      description: "Button 사이즈",
      type: "string",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    selectedCount: {
      control: { type: "number" },
      description: "selected length",
      type: "string",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },
};

export default FilterButtonStory;

type Story = StoryObj<typeof FilterButton>;

export const Fill: Story = {
  args: {
    variant: "fill",
    size: "medium",
    children: "필터",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "medium",
    children: "필터",
  },
};
