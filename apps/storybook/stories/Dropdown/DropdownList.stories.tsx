import { DropdownList, DropdownListProps } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const DropdownListStory: Meta = {
  title: "Components/Dropdown/DropdownList",
  component: DropdownList,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default DropdownListStory;
type Story = StoryObj<typeof DropdownList>;

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

export const Default: Story = {
  args: {
    options: OPTION,
    value: {
      label: "label1-2",
      value: "value1-2",
    },
  },
};

export const GroupOptions: Story = {
  args: {
    options: createOption(["tjthfa", "asd", "rff"]),
    isSearchable: true,
  },
};
