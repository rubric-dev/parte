import { Dialog } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Overlays/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    width: 480,
    confirmVariant: "fill-primary",
    children: `Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
    lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
    impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
    aperiam.`,
  },
  render: ({ children, ...args }) => {
    return (
      <Dialog
        title="Dialog Title"
        {...args}
        // eslint-disable-next-line no-console
        close={() => console.log("close clicked!")}
      >
        {children}
      </Dialog>
    );
  },
};
