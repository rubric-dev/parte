import { Steps, StepsProps } from "@parte-ds/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Controls/Steps",
  component: Steps,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<StepsProps> = ({ ...args }) => {
  return <Steps {...args} />;
};

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
export const Default = Template.bind({});
Default.args = {
  stepList: MOCK,
  currentStep: MOCK.findIndex((v) => v.id === 3),
};
