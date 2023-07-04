import { ActionTickIcon } from "@parte-ds/icons";
import {
  Box,
  Option,
  SidebarTab,
  Tab,
  Tabs,
  TabsProps,
  TabVariant,
} from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const TabsStory: Meta = {
  title: "Components/Controls/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default TabsStory;
type Story = StoryObj<TabsProps & { variant?: TabVariant }>;

const SAMPLE_TABS: Option<string>[] = [
  { label: "Tab 1", value: "Tab 1" },
  { label: "Tab 2", value: "Tab 2" },
  { label: "Tab 3", value: "Tab 3" },
  { label: "Tab 4", value: "Tab 4" },
];

const Template = ({
  variant,
  ...args
}: TabsProps & { variant?: TabVariant }) => {
  const [selected, setSelected] = useState<Option<string>>(SAMPLE_TABS[0]);
  return (
    <Tabs {...args}>
      {SAMPLE_TABS.map((option) => (
        <Tab
          key={option.label}
          onClick={() => setSelected(option)}
          selected={selected.label === option.label}
          variant={variant}
        >
          {option.label}
        </Tab>
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

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    variant: "Primary",
  },
};

export const Secondary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    variant: "Secondary",
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
