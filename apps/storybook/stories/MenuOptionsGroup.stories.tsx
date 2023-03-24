import { Menu, MenuOptionsGroupProps } from "@parte-dev/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Menu/MenuOptionsGroup",
  component: Menu.OptionsGroup,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<MenuOptionsGroupProps<string>> = () => {
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [selectedField, setSelectedField] = useState("email");

  return (
    <Menu>
      <Menu.OptionsGroup
        title="Order"
        options={[
          { label: "Ascending", value: "asc" },
          { label: "Descending", value: "desc" },
        ]}
        selected={selectedOrder}
        onChange={(selected) => setSelectedOrder(selected)}
      />
      <Menu.Divider />
      <Menu.OptionsGroup
        title="Show"
        options={[
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
          { label: "State", value: "state" },
          { label: "Country", value: "country" },
          { label: "Type", value: "type" },
        ]}
        selected={selectedField}
        onChange={(selected) => setSelectedField(selected)}
      />
    </Menu>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "title",
};
