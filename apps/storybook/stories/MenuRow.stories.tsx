import { ActionChatIcon } from "@parte/icons";
import { Menu, MenuRowProps } from "@parte/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Menu/MenuRow",
  component: Menu.Row,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<MenuRowProps> = ({ ...args }) => {
  return <Menu.Row {...args}>Menu Row</Menu.Row>;
};
const ClickableTemplate: Story<MenuRowProps> = ({ ...args }) => {
  const [selected, setSeleted] = useState(false);
  return (
    <Menu.Row
      selected={selected}
      onSelect={() => setSeleted((prev) => !prev)}
      {...args}
    >
      Menu Row
    </Menu.Row>
  );
};
export const Default = Template.bind({});
Default.args = {
  selected: false,
};
export const Icon = Template.bind({});
Icon.args = {
  leadingIcon: <ActionChatIcon size={16} />,
};
export const Title = Template.bind({});
Title.args = {
  type: "title",
};
export const Checkbox = Template.bind({});
Checkbox.args = {
  type: "checkbox",
  selected: false,
};
export const Clickable = ClickableTemplate.bind({});
