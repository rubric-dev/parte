import { Textarea, TextAreaProps } from "@parte/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<TextAreaProps> = ({ ...args }) => {
  return <Textarea {...args} placeholder="Placeholder" />;
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  errorText: "error!!",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
};

export const WithLabelRequired = Template.bind({});
WithLabelRequired.args = {
  label: "Label",
  required: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Label",
  description: "Description",
};
