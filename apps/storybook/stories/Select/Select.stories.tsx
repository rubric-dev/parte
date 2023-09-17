import { ActionAddIcon } from "@parte-ds/icons";
import { Option, Select } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const OPTIONS: Option<string>[] = (() => {
  return Array.from({ length: 30 }).map((_, index) => ({
    label: `test1-${index}`,
    value: `test1-${index}`,
    icon: index % 3 === 0 ? <ActionAddIcon size={12} /> : undefined,
  }));
})();

const SelectStory: Meta = {
  title: "Components/Select/Select",
  component: Select,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  args: { width: 180, options: OPTIONS },
};

export default SelectStory;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    isSearchable: false,
    isClearable: true,
  },
};

export const OpenMenuDefault: Story = {
  args: {
    isSearchable: false,
    isClearable: true,
    menuIsOpen: true,
  },
};

export const Multi: Story = {
  args: {
    isSearchable: false,
    isClearable: true,
    isMulti: true,
    width: 300,
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
export const NoOption: Story = {
  args: { noOptionsMessage: () => "옵션이 없습니다." },
};

export const GroupDefault: Story = {
  args: {
    isSearchable: false,
    options: [{ options: OPTIONS, label: `유일한 그룹` }],
  },
};

export const OpenMenuGroupDefault: Story = {
  args: {
    isSearchable: false,
    menuIsOpen: true,
    options: [{ options: OPTIONS, label: `유일한 그룹` }],
  },
};

export const GroupMultiDefault: Story = {
  args: {
    isMulti: true,
    options: [{ options: OPTIONS, label: `유일한 그룹` }],
    width: 300,
  },
};
