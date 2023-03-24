import { Button, CornerDialog, CornerDialogProps } from "@parte/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Overlays/CornerDialog",
  component: CornerDialog,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<CornerDialogProps> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open CornerDialog
      </Button>
      <div style={{ width: "100%", height: "1000px" }} />
      <CornerDialog
        onCloseComplete={() => setOpen(false)}
        title="Dialog Title"
        {...args}
        isShown={open}
      >
        {children}
      </CornerDialog>
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  confirmVariant: "primary",
  children: `Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
  lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
  impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
  aperiam.`,
};
