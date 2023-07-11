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
    label: { description: "해당 Textarea 이 담당하는 값의 title을 적습니다" },
    description: { description: "해당 Textarea 값에 대한 설명을 적습니다." },
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
      description: "Label, description의 layout 방향을 결정합니다",
    },
    errorText: { description: "오류가 발생했을 경우 오류 메세지를 적습니다" },
    width: { type: "number" },
    id: {
      description:
        "`label` props를 넘겨주었을때 만약 label을 클릭하여 input에 포커스를 주고 싶다면 id를 넣어주어야 합니다.",
      type: "string",
    },
    resizable: {
      type: "boolean",
      description:
        "Textarea의 resize 기능을 사용할지 정하는 props 입니다. 기본값은 `true` 입니다. `width` 속성을 줄 경우 무시됩니다.",
    },
  },
};
export default TextAreaStory;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "",
    description: "",
    placeholder: "Placeholder",
    direction: "vertical",
    errorText: "",
    width: undefined,
    id: undefined,
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
    errorText: "error!!",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};

export const WithLabelRequired: Story = {
  args: {
    label: "Label",
    required: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Label",
    description: "Description",
  },
};

export const WithLabelHorizontal: Story = {
  args: {
    label: "Label",
    direction: "horizontal",
  },
};

export const WithLabelRequiredHorizontal: Story = {
  args: {
    label: "Label",
    required: true,
    direction: "horizontal",
  },
};

export const WithDescriptionHorizontal: Story = {
  args: {
    label: "Label",
    description: "Description",
    direction: "horizontal",
  },
};
