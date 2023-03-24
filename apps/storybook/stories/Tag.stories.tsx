import { Option, Tag, TagProps } from "@parte-dev/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Forms/TagInput/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const TAG: Option<string> = { label: "LABEL", value: "value1" };

const Template: Story<TagProps> = ({ ...args }) => {
  return <Tag {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tag: { ...TAG, status: "normal" },
};

export const Error = Template.bind({});
Error.args = {
  tag: { ...TAG, status: "error" },
};

export const Disabled = Template.bind({});
Disabled.args = {
  tag: { ...TAG, status: "disabled" },
};
