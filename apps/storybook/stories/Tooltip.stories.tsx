import { Button, POSITION, Tooltip, TooltipProps } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Tooltip>;

const Template = ({ children, ...args }: TooltipProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "50px",
        minHeight: "50vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <Tooltip {...args}>{children}</Tooltip>
    </div>
  );
};

export const Default: Story = {
  args: {
    position: POSITION.BOTTOM_RIGHT,
    content:
      "Segment syncs a list of users to these destinations and keeps it up to date.",
    children: <Button variant="fill-primary">Click Me</Button>,
    hideDelay: 100,
    showDelay: 100,
  },
  render: Template,
};

const TooltipTemplate = () => {
  return <Tooltip.Content>툴팁의 내용</Tooltip.Content>;
};

export const TooltipContent: Story = { render: TooltipTemplate };
