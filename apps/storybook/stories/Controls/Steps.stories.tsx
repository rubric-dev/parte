import { Steps } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const StepsStory = {
  title: "Components/Controls/Steps",
  component: Steps,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

export default StepsStory;
type Story = StoryObj<typeof Steps>;

const MOCK = [
  {
    name: "냉장고 확인",
  },
  {
    name: "운전해서 상점으로 가기",
  },
  {
    name: "필요한 것 구입하기",
  },
  {
    name: "운전해서 집으로 오기",
  },
  {
    name: "음식을 냉장고에 보관하기",
  },
].map((v, i) => {
  return {
    id: i,
    label: v.name,
  };
});

export const Default: Story = {
  args: {
    stepList: MOCK,
    currentStep: MOCK.findIndex((v) => v.id === 3),
  },
};
