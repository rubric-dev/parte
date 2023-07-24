import { Textarea } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const TextAreaStory: Meta = {
  title: "Components/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  args: {
    placehoder: "Placeholder",
  },
  argTypes: {
    width: { type: "number" },
    resizable: {
      type: "boolean",
      description:
        "Textarea의 resize 기능을 사용할지 정하는 props 입니다. 기본값은 `true` 입니다. `width` 속성을 줄 경우 무시됩니다.",
    },
    isError: { type: "boolean" },
  },
};
export default TextAreaStory;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    isError: false,
    placeholder: "Placeholder",
    width: undefined,
    resizable: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
};
