import { Toggle } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const ToggleStory: Meta = {
  title: "Components/Controls/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    label: {
      description:
        "Toggle 추측에 입력할 텍스트를 넘겨줍니다. Label을 클릭하면 Toggle을 제어 할 수 있습니다.",
      type: "string",
    },
    checked: {
      description: `Toggle 컴포넌트는 type="checkbox"인 input입니다. 제어 컴포넌트로 사용하고 싶다면 checked, onChange 두 개를 넘겨주면되고, 비제어 컴포넌트로 사용하려면 onChange, defaultValue를 활용하면 됩니다.`,
      type: "boolean",
      defaultValue: false,
    },
    disabled: { type: "boolean" },
  },
};

export default ToggleStory;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};
export const Enabled: Story = {
  args: { checked: true },
};
export const DefaultWithLabel: Story = {
  args: {
    label: "Toggle Button",
  },
};
export const Disabled: Story = {
  args: {
    label: "Toggle Button",
    disabled: true,
  },
};
