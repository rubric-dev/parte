import { Button, Overlay, OverlayProps } from "@parte/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Overlays/Overlay",
  component: Overlay,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<OverlayProps> = ({ ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Overlay
      </Button>
      <div style={{ width: "100%", height: "1000px" }} />
      <Overlay {...args} isShown={open} onExited={() => setOpen(false)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
export const AllowScroll = Template.bind({});
AllowScroll.args = {
  preventBodyScrolling: false,
};
