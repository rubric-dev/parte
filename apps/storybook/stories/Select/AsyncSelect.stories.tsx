import { ActionAddIcon } from "@parte-ds/icons";
import { Option, AsyncSelect, SelectAdditional } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { GroupBase, OptionsOrGroups } from "react-select";
import { LoadOptions } from "react-select-async-paginate";

const loadOptions: LoadOptions<
  Option<string>,
  GroupBase<Option<string>>,
  { page: number }
> = async (search, loadedOptions, additional) => {
  const OPTION = await getOptionsAsync(additional?.page ?? 0);
  return {
    options: OPTION,
    hasMore: true,
    additional: {
      ...additional,
      page: (additional?.page ?? 0) + 1,
    },
  };
};

const loadGroupOptions: LoadOptions<
  Option<string>,
  GroupBase<Option<string>>,
  { page: number }
> = async (search, loadedOptions, additional) => {
  const page = additional?.page ?? 0;
  const OPTION = await getOptionsAsync(page);

  return {
    options: [{ options: OPTION, label: `${page + 1}번째 그룹` }],
    hasMore: true,
    additional: {
      ...additional,
      page: page + 1,
    },
  };
};

const AsyncSelectStory: Meta = {
  title: "Components/Select/AsyncSelect",
  component: AsyncSelect,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  args: {
    loadOptions,
    width: 180,
  },
};

export default AsyncSelectStory;

type Story = StoryObj<typeof AsyncSelect>;

let counts = 1;
const getOptionsAsync = (page: number): Promise<Option<string>[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 30 }).map((_, index) => {
          const nextIndex = index + counts;
          return {
            label: `page${page}-${nextIndex}`,
            value: `page${page}-${nextIndex}`,
            icon: nextIndex % 3 === 0 ? <ActionAddIcon size={12} /> : undefined,
          };
        })
      );
      counts += 30;
    }, 500);
  });
};

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

export const Loading: Story = {
  args: {
    isLoading: true,
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
    isMulti: false,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isMulti: false,
  },
};

export const GroupDefault: Story = {
  args: {
    isSearchable: false,
    loadOptions: loadGroupOptions as any,
  },
};

export const OpenMenuGroupDefault: Story = {
  args: {
    isSearchable: false,
    menuIsOpen: true,
    loadOptions: loadGroupOptions as any,
  },
};

export const GroupMultiDefault: Story = {
  args: {
    loadOptions: loadGroupOptions as any,
    isMulti: true,
    width: 300,
  },
};
