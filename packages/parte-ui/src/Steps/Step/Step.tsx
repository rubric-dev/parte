import { ActionTickIcon } from "../../../../parte-icons/src";
import * as Styled from "./Step.styled";
import { StepProps, StepStatus } from "./Step.types";

export function Step({ label, currentStep, stepIndex }: StepProps) {
  const stepValidator = (): StepStatus => {
    if (stepIndex === currentStep) {
      return "inProgress";
    } else if (stepIndex < currentStep) {
      return "complete";
    }
    return "notStarted";
  };

  const stepStatus = stepValidator();

  return (
    <Styled.Container gap={8}>
      <Styled.Icon $status={stepStatus}>
        {stepStatus === "complete" ? (
          <ActionTickIcon size={8} color="G500" />
        ) : (
          stepIndex
        )}
      </Styled.Icon>
      <Styled.Label $status={stepStatus}>{label}</Styled.Label>
    </Styled.Container>
  );
}
