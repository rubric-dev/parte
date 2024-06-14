import { Menu, MenuGroupProps } from "@parte-ds/ui";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Components/Menu/MenuGroup",
  component: Menu.Group,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Menu.Group>;

export const Default: Story = {
  args: { title: "title" },
  render: ({ ...args }) => {
    return (
      <Menu.Group {...args}>
        <Menu.Row>Label 1</Menu.Row>
        <Menu.Row>Label 2</Menu.Row>
        <Menu.Row>Label 3</Menu.Row>
      </Menu.Group>
    );
  },
};
