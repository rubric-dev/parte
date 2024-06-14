import { Box, Spinner, SpinnerProps } from "@parte-ds/ui";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

type Story = StoryObj<typeof Spinner>;

const Template = ({ size }: SpinnerProps) => {
  return (
    <Box
      display="flex"
      width="100%"
      height="90vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size={size} />
    </Box>
  );
};

export const Default: Story = { args: { size: 24 }, render: Template };
