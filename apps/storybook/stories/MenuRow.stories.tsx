import { ActionChatIcon } from "@parte-ds/icons";
import { Menu, MenuRowProps } from "@parte-ds/ui";
import { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Menu/MenuRow",
  component: Menu.Row,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Menu.Row>;

const Template = ({ ...args }: MenuRowProps) => {
  return <Menu.Row {...args}>Menu Row</Menu.Row>;
};
const ClickableTemplate = ({ ...args }: MenuRowProps) => {
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
export const Default: Story = {
  args: { selected: false },
  render: Template,
};
export const Icon: Story = {
  args: { leadingIcon: <ActionChatIcon size={16} /> },
  render: Template,
};
export const Title: Story = {
  args: { type: "title" },
  render: Template,
};
export const Checkbox: Story = {
  args: { type: "checkbox", selected: false },
  render: Template,
};

export const Clickable: Story = {
  render: ClickableTemplate,
};
