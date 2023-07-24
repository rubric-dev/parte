import { ActionCrossIcon, InterfaceCaretDownIcon } from "@parte-ds/icons";
import { TagInput, TagInputProps, TagOption } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const TagInputStory: Meta = {
  title: "Components/Forms/TagInput",
  component: TagInput,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};
export default TagInputStory;

type Story = StoryObj<typeof TagInput>;

const OPTION_LIST: TagOption[] = [
  { label: "label1", value: "1", status: "normal" },
  { label: "label2", value: "2", status: "error" },
  { label: "label3", value: "3", status: "disabled" },
];

const Template = ({ ...args }: TagInputProps) => {
  const [values, setValues] = useState<TagOption[]>(OPTION_LIST);

  const onAdd = (label: string) => {
    setValues((props) => [...props, { label, value: label, status: "normal" }]);
  };

  const onRemove = (value: string) => {
    const filteredList = values.filter((option) => option.value !== value);
    setValues(filteredList);
  };

  return (
    <TagInput
      {...args}
      trailingIcon={
        <div style={{ display: "flex", gap: "8px" }}>
          <ActionCrossIcon
            size={12}
            color="N600"
            onClick={() => setValues([])}
          />
          <InterfaceCaretDownIcon size={12} color="N600" />
        </div>
      }
      placeholder="Placeholder"
      values={values}
      onRemove={onRemove}
      onAdd={onAdd}
      required
    />
  );
};

export const Default: Story = {
  render: Template,
  args: {},
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};
export const Error: Story = {
  render: Template,
  args: {
    disabled: true,
    isError: true,
  },
};
