import { DropdownList, DropdownListProps } from "@parte/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Dropdown/DropdownList",
  component: DropdownList,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<DropdownListProps<string>> = ({ ...args }) => {
  return <DropdownList {...args} />;
};

const OPTION = [
  {
    label: "label1-1",
    value: "value1-1",
  },
  {
    label: "label1-2",
    value: "value1-2",
  },
  {
    label: "label1-3",
    value: "value1-3",
  },
];

const createOption = (groupNames: string[]) => {
  return groupNames.map((gn, index) => {
    return {
      groupName: gn,
      options: groupNames.map((x, xindex) => {
        return { label: `${index}-${xindex}`, value: `${index}-${xindex}` };
      }),
    };
  });
};

export const Default = Template.bind({});
Default.args = {
  options: OPTION,
  value: {
    label: "label1-2",
    value: "value1-2",
  },
};
export const GroupOptions = Template.bind({});
GroupOptions.args = {
  options: createOption(["tjthfa", "asd", "rff"]),
  isSearchable: true,
};
