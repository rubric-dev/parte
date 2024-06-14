import { ColorList } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Foundation/Color",
  component: ColorList,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

export const Default: StoryObj<typeof ColorList> = {
  render: () => {
    return <ColorList />;
  },
};
