import { Steps, Step, StepProps } from "@parte-ds/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Controls/Steps/Step",
  component: Steps,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<StepProps> = ({ ...args }) => {
  return <Step {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Not Started",
  currentStep: 0,
  stepIndex: 1,
};

export const InProgress = Template.bind({});
InProgress.args = { label: "In Progress", currentStep: 1, stepIndex: 1 };

export const Complete = Template.bind({});
Complete.args = { label: "Complete", currentStep: 2, stepIndex: 1 };
