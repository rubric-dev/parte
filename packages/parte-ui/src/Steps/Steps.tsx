import { theme } from "../@foundations";
import { Box } from "../Layout";
import { Step } from "./Step/Step";
import * as Styled from "./Steps.styled";
import { StepsProps } from "./Steps.types";

export const Steps = ({ stepList, currentStep }: StepsProps) => {
  return (
    <Styled.Steps>
      {stepList.map((step, index) => (
        <>
          {index !== 0 && (
            <Box width={16} height={1} backgroundColor={theme.colors.N400} />
          )}
          <Step
            key={step.id}
            currentStep={currentStep}
            stepIndex={index + 1}
            label={step.label}
          />
        </>
      ))}
    </Styled.Steps>
  );
};
