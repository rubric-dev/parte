import { Story, Meta } from "@storybook/react";
import { MultiValue, SingleValue } from "react-select";
import { useState } from "react";
import { Option, Select, StaticSelectProps } from "@parte-ds/ui";
import { ActionAddIcon } from "@parte-ds/icons";

export default {
  title: "Components/Select/StaticSelect",
  component: Select,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const OPTION: Option<string>[] = (() => {
  return Array.from({ length: 30 }).map((_, index) => ({
    label: `test1-${index}`,
    value: `test1-${index}`,
    icon: index % 3 === 0 ? <ActionAddIcon size={12} /> : undefined,
  }));
})();

const Template: Story<
  StaticSelectProps<string> & {
    isMulti?: boolean;
    isError?: boolean;
    isDisabled?: boolean;
  }
> = ({ isMulti, ...args }) => {
  const [selectedValue, setSelectedValue] = useState<
    Option<string>[] | SingleValue<Option<string>> | undefined
  >();

  const onChange = (
    option: MultiValue<Option<string>> | SingleValue<Option<string>>
  ) => {
    if (typeof option === "object" && !!option) {
      if (isMulti) {
        if ("length" in option) {
          const selected = option as Option<string>[];

          setSelectedValue(selected);
        } else {
          const selected = option as Option<string>;

          setSelectedValue([
            ...((selectedValue as Option<string>[]) ?? []),
            selected,
          ]);
        }

        return;
      }
      setSelectedValue(option as SingleValue<Option<string>>);
    }
  };

  return (
    <Select
      {...args}
      type="static"
      options={OPTION}
      value={selectedValue}
      onChange={onChange}
      isMulti={isMulti}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isSearchable: false,
  isClearable: true,
};

export const OpenMenuDefault = Template.bind({});
OpenMenuDefault.args = {
  isSearchable: false,
  isClearable: true,
  menuIsOpen: true,
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  label: "TEST",
  description: "이것은 설명입니다.",
  required: true,
};

export const DefaultWithHorizontalLabel = Template.bind({});
DefaultWithHorizontalLabel.args = {
  label: "TEST",
  description: "이것은 설명입니다.",
  required: true,
  direction: "horizontal",
};

export const Multi = Template.bind({});
Multi.args = {
  isSearchable: false,
  isClearable: true,
  isMulti: true,
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  errorText: "this is error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

const GroupTemplate: Story<
  StaticSelectProps<string> & {
    isMulti?: boolean;
    isError?: boolean;
    isDisabled?: boolean;
  }
> = ({ isMulti, ...args }) => {
  const OPTION = (() => {
    return Array.from({ length: 30 }).map((_, index) => ({
      label: `test1-${index}`,
      value: `test1-${index}`,
    }));
  })();

  const [selectedValue, setSelectedValue] = useState<
    Option<string>[] | SingleValue<Option<string>> | undefined
  >();

  const onChange = (
    option: MultiValue<Option<string>> | SingleValue<Option<string>>
  ) => {
    if (typeof option === "object" && !!option) {
      if (isMulti) {
        if ("length" in option) {
          const selected = option as Option<string>[];

          setSelectedValue(selected);
        } else {
          const selected = option as Option<string>;

          setSelectedValue([
            ...((selectedValue as Option<string>[]) ?? []),
            selected,
          ]);
        }

        return;
      }
      setSelectedValue(option as SingleValue<Option<string>>);
    }
  };

  return (
    <Select
      {...args}
      type="static"
      value={selectedValue}
      options={[{ options: OPTION, label: `유일한 그룹` }]}
      isMulti={isMulti}
      onChange={onChange}
    />
  );
};

export const GroupDefault = GroupTemplate.bind({});

GroupDefault.args = {
  isSearchable: false,
};

export const OpenMenuGroupDefault = GroupTemplate.bind({});

OpenMenuGroupDefault.args = {
  isSearchable: false,
  menuIsOpen: true,
};

export const GroupMultiDefault = GroupTemplate.bind({});

GroupMultiDefault.args = {
  isMulti: true,
};
