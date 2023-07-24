import { FilePicker } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const FilePickerStory: Meta = {
  title: "Components/Forms/FilePicker",
  component: FilePicker,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default FilePickerStory;

export type Story = StoryObj<typeof FilePicker>;

export const Default: Story = {
  args: {
    name: "default-file-picker",
  },
};

export const MultipleFiles: Story = {
  args: {
    name: "multi-file-picker",
    multiple: true,
  },
};

export const CustomInputName: Story = {
  args: {
    name: "custom-name-file-picker",
    multiple: true,
    inputText: (files) => {
      if (files.length) {
        return "custom file name";
      }
      return "select file";
    },
  },
};

export const Disabled: Story = {
  args: {
    name: "disable-file-picker",
    disabled: true,
  },
};
export const Error: Story = {
  args: {
    name: "error-file-picker",
    isError: true,
  },
};
