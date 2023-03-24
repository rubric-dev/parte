import { Dialog, DialogProps } from "@parte-ds/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Overlays/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<DialogProps> = ({ children, ...args }) => {
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
};
export const Default = Template.bind({});
Default.args = {
  width: 480,
  confirmVariant: "primary",
  children: `Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
  lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
  impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
  aperiam.`,
};
