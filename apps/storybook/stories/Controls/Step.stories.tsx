import { Step } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const StepStory = {
  title: "Components/Controls/Steps/Step",
  component: Step,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

export default StepStory;
type Story = StoryObj<typeof Step>;

export const Default: Story = {
  args: {
    label: "Not Started",
    currentStep: 0,
    stepIndex: 1,
  },
};

export const InProgress: Story = {
  args: {
    label: "In Progress",
    currentStep: 1,
    stepIndex: 1,
  },
};

export const Complete: Story = {
  args: {
    label: "Complete",
    currentStep: 2,
    stepIndex: 1,
  },
};
