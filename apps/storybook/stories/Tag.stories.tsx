import { Option, Tag, TagProps } from "@parte-ds/ui";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Components/Forms/TagInput/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Tag>;

const TAG: Option<string> = { label: "LABEL", value: "value1" };

const Template = ({ ...args }: TagProps) => {
  return <Tag {...args} />;
};

export const Default: Story = {
  args: { tag: { ...TAG, status: "normal" } },
  render: Template,
};

export const Error: Story = {
  args: { tag: { ...TAG, status: "error" } },
  render: Template,
};

export const Disabled: Story = {
  args: { tag: { ...TAG, status: "disabled" } },
  render: Template,
};
