import { Button, Overlay, OverlayProps } from "@parte-ds/ui";
import { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Overlays/Overlay",
  component: Overlay,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Overlay>;

const Template = ({ ...args }: OverlayProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
      <Button variant="fill-primary" onClick={() => setOpen(true)}>
        Open Overlay
      </Button>
      <div style={{ width: "100%", height: "1000px" }} />
      <Overlay {...args} isShown={open} onExited={() => setOpen(false)} />
    </div>
  );
};

export const Default: Story = { render: Template };

export const AllowScroll: Story = {
  args: { preventBodyScrolling: false },
  render: Template,
};
