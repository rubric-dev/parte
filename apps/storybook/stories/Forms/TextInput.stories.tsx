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
    isError: {
      type: "boolean",
      description: "오류가 발생했을 경우 border에 표시하고 싶을때 사용합니다",
    },
    type: {
      description:
        "input tag의 type 입니다. file의 경우는 FilePicker 컴포넌트를 사용해주세요",
    },
    width: { type: "number" },
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
    placeholder: "Placeholder",
    width: undefined,
    disabled: false,
    showSpinButton: false,
    type: "text",
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
    isError: true,
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
