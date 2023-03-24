import {
  ActionChatIcon,
  ActionCrossIcon,
  ActionRefreshIcon,
} from "@parte-dev/icons";
import { Menu, MenuProps, Option } from "@parte-dev/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<MenuProps> = () => {
  return (
    <Menu>
      <Menu.Group title="TITLE">
        <Menu.Row leadingIcon={<ActionChatIcon size={16} />}>Label 1</Menu.Row>
        <Menu.Row leadingIcon={<ActionChatIcon size={16} />}>Label 2</Menu.Row>
        <Menu.Row leadingIcon={<ActionRefreshIcon size={16} />}>
          Label 3
        </Menu.Row>
      </Menu.Group>
      <Menu.Divider />
      <Menu.Group title="TITLE 2">
        <Menu.Row leadingIcon={<ActionCrossIcon size={16} />}>Label</Menu.Row>
      </Menu.Group>
    </Menu>
  );
};

const menuOptions: Option<string>[] = [
  { label: "label1", value: "label1" },
  { label: "label2", value: "label2" },
  { label: "label3", value: "label3" },
];
const SelectableTemplate: Story<MenuProps> = () => {
  const [selected, setSelected] = useState("");
  return (
    <Menu>
      <Menu.Group title="TITLE">
        {menuOptions.map(({ label, value }) => (
          <Menu.Row
            key={label}
            onSelect={() => setSelected(value)}
            selected={selected === value}
            leadingIcon={<ActionChatIcon size={16} />}
          >
            {label}
          </Menu.Row>
        ))}
      </Menu.Group>
      <Menu.Divider />
      <Menu.Group title="TITLE 2">
        <Menu.Row leadingIcon={<ActionCrossIcon size={16} />}>Delete</Menu.Row>
      </Menu.Group>
    </Menu>
  );
};

const CheckBoxTemplate: Story<MenuProps> = () => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <Menu>
      <Menu.Group title="TITLE">
        {menuOptions.map(({ label, value }) => {
          const included = selected.includes(value);
          return (
            <Menu.Row
              key={label}
              type="checkbox"
              onSelect={() => {
                setSelected((prev) =>
                  included
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
                );
              }}
              selected={included}
            >
              {label}
            </Menu.Row>
          );
        })}
      </Menu.Group>
    </Menu>
  );
};

export const Default = Template.bind({});
export const Selectable = SelectableTemplate.bind({});
export const CheckBox = CheckBoxTemplate.bind({});
