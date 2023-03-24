import { ActionTickIcon } from "@parte/icons";
import {
  Box,
  Option,
  SidebarTab,
  Tab,
  Tabs,
  TabsProps,
  TabVariant,
} from "@parte/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Controls/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const SAMPLE_TABS: Option<string>[] = [
  { label: "Tab 1", value: "Tab 1" },
  { label: "Tab 2", value: "Tab 2" },
  { label: "Tab 3", value: "Tab 3" },
  { label: "Tab 4", value: "Tab 4" },
];

const Template: Story<TabsProps & { variant?: TabVariant }> = ({
  variant,
  ...args
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
        >
          {option.label}
        </Tab>
      ))}
    </Tabs>
  );
};
const IconTemplate: Story<TabsProps & { variant?: TabVariant }> = ({
  variant,
  ...args
}) => {
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

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "Secondary",
};

export const IconTab = IconTemplate.bind({});
IconTab.args = {};

const SideBarTemplate: Story<TabsProps & { variant?: TabVariant }> = ({
  variant,
  ...args
}) => {
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

export const SideBarTab = SideBarTemplate.bind({});

SideBarTab.args = {
  flexBasis: 200,
};
