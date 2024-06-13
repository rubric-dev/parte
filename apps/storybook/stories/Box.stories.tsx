import { Box, Button } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Box>;

const Content = (
  <>
    <Button variant="fill-primary">First Button</Button>
    <Button variant="fill-primary">Second Button</Button>
    <Button variant="fill-primary">Third Button</Button>
    <Button variant="fill-primary">Fourth Button</Button>
  </>
);

export const FlexBox: Story = {
  args: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    children: Content,
    marginTop: 32,
    backgroundColor: "purple",
    width: 600,
    justifyContent: "space-between",
  },
};

export const GridBox: Story = {
  args: {
    display: "grid",
    gap: 10,
    backgroundColor: "green",
    gridTemplateColumns: "repeat(2, 1fr)",
    children: Content,
  },
};
