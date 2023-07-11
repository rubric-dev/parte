import {
  ActionCrossIcon,
  ActionSearchIcon,
  InterfaceCaretDownIcon,
} from "@parte-ds/icons";
import { TextInput } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const TextInputStory: Meta = {
  title: "Components/Forms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  args: {
    placeholder: "Placeholder",
  },
  argTypes: {
    label: { description: "해당 TextInput 이 담당하는 값의 title을 적습니다" },
    description: { description: "해당 TextInput 값에 대한 설명을 적습니다." },
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
      description: "Label, description의 layout 방향을 결정합니다",
    },
    errorText: { description: "오류가 발생했을 경우 오류 메세지를 적습니다" },
    type: {
      description:
        "input tag의 type 입니다. file의 경우는 FilePicker 컴포넌트를 사용해주세요",
    },
    width: { type: "number" },
    id: {
      description:
        "`label` props를 넘겨주었을때 만약 label을 클릭하여 input에 포커스를 주고 싶다면 id를 넣어주어야 합니다.",
      type: "string",
    },
    showSpinButton: {
      description:
        "`type`이 number 일 경우 input의 오른쪽에 up/down 버튼을 보일지 말지 결정합니다. `type`이 number 가 아닐 경우에는 무시됩니다.",
    },
  },
};
export default TextInputStory;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "",
    description: "",
    placeholder: "Placeholder",
    direction: undefined,
    errorText: "",
    width: undefined,
    disabled: false,
    showSpinButton: false,
    type: "text",
    id: undefined,
  },
};

export const Number: Story = {
  args: { type: "number", showSpinButton: true },
};

export const Search: Story = {
  args: { leadingIcon: <ActionSearchIcon size={12} color="N600" /> },
};

export const Disabled: Story = {
  args: {
    leadingIcon: <ActionSearchIcon size={12} color="N600" />,
    trailingIcon: (
      <div style={{ display: "flex", gap: "8px" }}>
        <ActionCrossIcon size={12} color="N600" />
        <InterfaceCaretDownIcon size={12} color="N600" />
      </div>
    ),
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    trailingIcon: <ActionSearchIcon size={12} color="N600" />,
    errorText: "error!!",
  },
};

export const WithLabel: Story = {
  args: {
    direction: "vertical",
    label: "Label",
    id: "WithLabel",
  },
};

export const WithLabelRequired: Story = {
  args: {
    label: "Label",
    direction: "vertical",
    required: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Label",
    description: "Description",
    direction: "vertical",
  },
};

export const WithHorizontalLabel: Story = {
  args: {
    label: "Label",
    direction: "horizontal",
  },
};
export const WithHorizontalLabelRequired: Story = {
  args: {
    label: "Label",
    required: true,
    direction: "horizontal",
  },
};

export const WithHorizontalDescription: Story = {
  args: {
    label: "Label",
    description: "Description",
    direction: "horizontal",
  },
};

export const WithHorizontalErrorAndDescription: Story = {
  args: {
    label: "Label",
    description: "Description",
    errorText: "error text",
    direction: "horizontal",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    leadingIcon: <ActionSearchIcon size={12} color="N600" />,
    trailingIcon: <InterfaceCaretDownIcon size={12} color="N600" />,
  },
};

export const WithManyIcon: Story = {
  args: {
    leadingIcon: <ActionSearchIcon size={12} color="N600" />,
    trailingIcon: (
      // 여기는 어떻게 하는게 좋을까요
      // 오른쪽에 2개의 아이콘이 들어갈 경우가있는데, 두 아이콘 사이의 간격은 항상 8px 이어야합니다.
      // 그런데 사용측에서 직접 8px을 넘겨줘야해요
      <div style={{ display: "flex", gap: "8px" }}>
        <ActionCrossIcon size={12} color="N600" />
        <InterfaceCaretDownIcon size={12} color="N600" />
      </div>
    ),
  },
};
