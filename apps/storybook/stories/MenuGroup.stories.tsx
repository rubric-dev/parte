import { Menu, MenuGroupProps } from "@parte/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Menu/MenuGroup",
  component: Menu.Group,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<MenuGroupProps> = ({ ...args }) => {
  return (
    <Menu.Group {...args}>
      <Menu.Row>Label 1</Menu.Row>
      <Menu.Row>Label 2</Menu.Row>
      <Menu.Row>Label 3</Menu.Row>
    </Menu.Group>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "title",
};
