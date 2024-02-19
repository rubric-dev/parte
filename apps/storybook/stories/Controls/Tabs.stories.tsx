import { ActionTickIcon } from "@parte-ds/icons";
import {
  Box,
  Option,
  SidebarTab,
  Stacked,
  Tab,
  Tabs,
  TabSize,
  TabsProps,
  TabVariant,
} from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TAB_VARIANT_OPTIONS } from "../../.storybook/constant";

const TabsStory: Meta = {
  title: "Components/Controls/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default TabsStory;
type Story = StoryObj<
  TabsProps & { variant?: TabVariant; size?: TabSize; disabled?: boolean }
>;

const SAMPLE_TABS: Option<string>[] = [
  { label: "Tab 1", value: "Tab 1" },
  { label: "Tab 2", value: "Tab 2" },
  { label: "Tab 3", value: "Tab 3" },
  { label: "Tab 4", value: "Tab 4" },
];

const TabTemplate = ({
  variant,
  size,
  disabled,
  ...args
}: TabsProps & {
  variant?: TabVariant;
  size?: TabSize;
  disabled?: boolean;
}) => {
  const [selected, setSelected] = useState<Option<string>>(SAMPLE_TABS[0]);
  return (
    <Tabs {...args}>
      {SAMPLE_TABS.map((option) => (
        <Tab
          key={option.label}
          onClick={() => setSelected(option)}
          selected={selected.label === option.label}
          variant={variant}
          size={size}
          disabled={disabled}
        >
          {option.label}
        </Tab>
      ))}
    </Tabs>
  );
};

const StackedTemplate = ({
  variant,
  size,
  disabled,
  ...args
}: TabsProps & {
  variant?: TabVariant;
  size?: TabSize;
  disabled?: boolean;
}) => {
  const [selected, setSelected] = useState<Option<string>>(SAMPLE_TABS[0]);
  return (
    <Tabs {...args}>
      {SAMPLE_TABS.map((option) => (
        <Stacked
          key={option.label}
          onClick={() => setSelected(option)}
          selected={selected.label === option.label}
          variant={variant}
          size={size}
          disabled={disabled}
        >
          {option.label}
        </Stacked>
      ))}
    </Tabs>
  );
};
const IconTemplate = ({
  variant,
  ...args
}: TabsProps & { variant?: TabVariant }) => {
  const [selected, setSelected] = useState<Option<string>>(SAMPLE_TABS[0]);
  return (
    <Tabs {...args}>
      {SAMPLE_TABS.map((option) => {
        const active = selected.label === option.label;

        return (
          <Tab
            key={option.label}
            onClick={() => setSelected(option)}
            selected={active}
            variant={variant}
            trailingIcon={active ? <ActionTickIcon size={12} /> : undefined}
          >
            {option.label}
          </Tab>
        );
      })}
    </Tabs>
  );
};

export const TabPrimary: Story = {
  render: (args) => <TabTemplate {...args} />,
  args: {
    variant: "Primary",
  },
  argTypes: {
    disabled: {
      type: "boolean",
      description: "-",
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
      description: "Tab size",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      options: TAB_VARIANT_OPTIONS,
      control: { type: "radio" },
      description: "Tab의 테마",
      table: {
        defaultValue: { summary: "Primary" },
      },
    },
  },
};
export const StackedPrimary: Story = {
  render: (args) => <StackedTemplate {...args} />,
  args: {
    variant: "Primary",
  },
  argTypes: {
    disabled: {
      type: "boolean",
      description: "-",
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
      description: "Tab size",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      options: TAB_VARIANT_OPTIONS,
      control: { type: "radio" },
      description: "Tab의 테마",
      table: {
        defaultValue: { summary: "Primary" },
      },
    },
  },
};

export const TabSecondary: Story = {
  render: (args) => <TabTemplate {...args} />,
  args: {
    variant: "Secondary",
  },
};

export const StackedSecondary: Story = {
  render: (args) => <StackedTemplate {...args} />,
  args: {
    variant: "Secondary",
  },
};
export const desabledTab: Story = {
  render: (args) => <TabTemplate {...args} />,
  args: {
    disabled: true,
  },
};
export const IconTab: Story = {
  render: (args) => <IconTemplate {...args} />,
  args: {
    variant: "Primary",
  },
};

const SideBarTemplate = ({
  variant,
  ...args
}: TabsProps & { variant?: TabVariant }) => {
  const [selected, setSelected] = useState<Option<string>>(SAMPLE_TABS[0]);
  return (
    <Box>
      <Tabs {...args}>
        {SAMPLE_TABS.map((option) => {
          const active = selected.label === option.label;

          return (
            <SidebarTab
              key={option.label}
              onClick={() => setSelected(option)}
              selected={active}
              variant={variant}
            >
              {option.label}
            </SidebarTab>
          );
        })}
      </Tabs>
    </Box>
  );
};

export const SideBarTab: Story = {
  render: (args) => <SideBarTemplate {...args} />,
  args: {
    flexBasis: 200,
  },
};
