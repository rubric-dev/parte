import { Story, Meta } from "@storybook/react";
import { BoxProps, Box, Button } from "@parte-ds/ui";

export default {
  title: "Components/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Content = (
  <>
    <Button variant="fill-primary">First Button</Button>
    <Button variant="fill-primary">Second Button</Button>
    <Button variant="fill-primary">Third Button</Button>
    <Button variant="fill-primary">Fourth Button</Button>
  </>
);

const Template: Story<BoxProps> = ({ flexDirection, ...args }) => {
  return <Box {...args} flexDirection={flexDirection} />;
};

export const FlexBox = Template.bind({});
FlexBox.args = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  children: Content,
  marginTop: 32,
  backgroundColor: "purple",
  width: 600,
  justifyContent: "space-between",
};

export const GridBox = Template.bind({});
GridBox.args = {
  display: "grid",
  gap: 10,
  backgroundColor: "green",
  gridTemplateColumns: "repeat(2, 1fr)",
  children: Content,
};
