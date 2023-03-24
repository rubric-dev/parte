import { Step } from "./Step/Step";
import * as Styled from "./Steps.styled";
import { StepsProps } from "./Steps.types";

export const Steps = ({ stepList, currentStep }: StepsProps) => {
  return (
    <Styled.Steps>
      {stepList.map((step, index) => (
        <Step
          key={step.id}
          currentStep={currentStep}
          stepIndex={index}
          label={step.label}
        />
      ))}
    </Styled.Steps>
  );
};
