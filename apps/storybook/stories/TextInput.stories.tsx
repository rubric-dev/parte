import {
  ActionCrossIcon,
  ActionSearchIcon,
  InterfaceCaretDownIcon,
} from "@parte-ds/icons";
import { TextInput, TextInputProps } from "@parte-ds/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Forms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<TextInputProps> = ({ ...args }) => {
  return <TextInput {...args} placeholder="Placeholder" />;
};

export const Default = Template.bind({});
Default.args = {};

export const Number = Template.bind({});
Number.args = { type: "number", showSpinButton: true };

export const Search = Template.bind({});
Search.args = {
  leadingIcon: <ActionSearchIcon size={12} color="N600" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  leadingIcon: <ActionSearchIcon size={12} color="N600" />,
  trailingIcon: (
    <div style={{ display: "flex", gap: "8px" }}>
      <ActionCrossIcon size={12} color="N600" />
      <InterfaceCaretDownIcon size={12} color="N600" />
    </div>
  ),
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  trailingIcon: <ActionSearchIcon size={12} color="N600" />,
  errorText: "error!!",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  direction: "vertical",
  label: "Label",
};

export const WithLabelRequired = Template.bind({});
WithLabelRequired.args = {
  label: "Label",
  direction: "vertical",
  required: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Label",
  description: "Description",
  direction: "vertical",
};

export const WithHorizontalLabel = Template.bind({});
WithHorizontalLabel.args = {
  label: "Label",
  direction: "horizontal",
};

export const WithHorizontalLabelRequired = Template.bind({});
WithHorizontalLabelRequired.args = {
  label: "Label",
  required: true,
  direction: "horizontal",
};

export const WithHorizontalDescription = Template.bind({});
WithHorizontalDescription.args = {
  label: "Label",
  description: "Description",
  direction: "horizontal",
};

export const WithHorizontalErrorAndDescription = Template.bind({});
WithHorizontalErrorAndDescription.args = {
  label: "Label",
  description: "Description",
  errorText: "error text",
  direction: "horizontal",
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  leadingIcon: <ActionSearchIcon size={12} color="N600" />,
  trailingIcon: <InterfaceCaretDownIcon size={12} color="N600" />,
};

export const WithManyIcon = Template.bind({});
WithManyIcon.args = {
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
};
